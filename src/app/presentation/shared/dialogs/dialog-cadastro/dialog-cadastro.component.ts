import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import * as _ from 'lodash';

import { IMotoristaController } from 'src/app/core/interfaces/controllers/imotorista-controller';
import { finalize } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material';
import { NotificationService } from '../../notification/notification.service';

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
    private motoristaController: IMotoristaController,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogCadastroComponent>,
    private notification: NotificationService
  ) {  }

  ngOnInit() {
    this.createForm();

    console.log(this.documents);
  }

  getControl(form: FormGroup, key: string) {
    return (form.controls[key] as FormArray).controls;
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      birth_date: ['', Validators.required],
      phone: ['', Validators.required],
      documents: this.fb.array([this.createDocument()])
    });
  }

  createDocument(): FormGroup {
    return this.fb.group({
      number: ['', Validators.required],
      category: '',
      doc_type: ['', Validators.required],
      add_document: false
    });
  }

  addNewDocument(item: FormControl): void {
    item.get('add_document').setValue(true);

    this.documents = this.form.get('documents') as FormArray;
    this.documents.push(this.createDocument());

    console.log(this.documents);
  }

  removeDocument(item: FormControl, index: number): void {
    console.log(item);

    this.documents.controls.splice(index, 1);
    this.documents.value.splice(index, 1);
  }

  save() {
    this.isLoading = true;

    console.log(this.form.valid);
    console.log(this.form.value);

    this.motoristaController.insert(this.form.value)
    .pipe(finalize(() => {
      this.isLoading = false;
    }))
    .subscribe(res => this.dialogRef.close(res), err => this.notification.open(err));
  }

}
