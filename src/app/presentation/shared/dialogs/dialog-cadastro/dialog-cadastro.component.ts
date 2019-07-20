import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import * as _ from 'lodash';

import { IMotoristaController } from 'src/app/core/interfaces/controllers/imotorista-controller';
import { finalize } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotificationService } from '../../notification/notification.service';
import { MotoristaModel } from '../../../../core/domain/entity/motorista-model';
import { DocumentsModel } from 'src/app/core/domain/entity/documents-model';

@Component({
  selector: 'app-dialog-cadastro',
  templateUrl: './dialog-cadastro.component.html',
  styleUrls: ['./dialog-cadastro.component.scss']
})
export class DialogCadastroComponent implements OnInit {

  form: FormGroup;
  documents: FormArray;
  isLoading: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: MotoristaModel,
    private motoristaController: IMotoristaController,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogCadastroComponent>,
    private notification: NotificationService
  ) {  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      id: [this.data ? this.data.id : ''],
      name: [this.data ? this.data.name : '', Validators.required],
      birth_date: [this.data ? this.data.birth_date : '', Validators.required],
      phone: [this.data ? this.data.phone : '', Validators.required],
      documents: this.data ? this.fb.array([]) : this.fb.array([this.createDocument()])
    });

    if (this.data) {
      this.addDocuments(this.data.documents);
    }
  }

  createDocument(document?: DocumentsModel): FormGroup {
    return this.fb.group({
      number: [document ? document.number : '', Validators.required],
      category: document ? document.category : '',
      doc_type: [document ? document.doc_type : '', Validators.required],
      add_document: document ? true : false
    });
  }

  addDocuments(documents: DocumentsModel[]) {
    documents.forEach((item) => {
      this.documents = this.form.get('documents') as FormArray;
      this.documents.push(this.createDocument(item));
    });
  }

  addNewDocument(item: FormControl): void {
    item.get('add_document').setValue(true);

    this.documents = this.form.get('documents') as FormArray;
    this.documents.push(this.createDocument());
  }

  removeDocument(item: FormControl, index: number): void {
    this.documents.controls.splice(index, 1);
    this.documents.value.splice(index, 1);

    if (this.documents.value.length === 0) {
      this.documents = this.form.get('documents') as FormArray;
      this.documents.push(this.createDocument());
    }
  }

  save() {
    this.isLoading = true;

    this.data ? this.update() : this.insert();
  }

  update() {
    this.motoristaController.update(this.form.value)
    .pipe(finalize(() => {
      this.isLoading = false;
    }))
    .subscribe(res => this.dialogRef.close(res), err => this.notification.open(err));
  }

  insert() {
    this.motoristaController.insert(this.form.value)
    .pipe(finalize(() => {
      this.isLoading = false;
    }))
    .subscribe(res => this.dialogRef.close(res), err => this.notification.open(err));
  }

}
