import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import * as _ from 'lodash';

import { IMotoristaController } from 'src/app/core/interfaces/controllers/imotorista-controller';
import { finalize } from 'rxjs/operators';

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
    private fb: FormBuilder
  ) {  }

  ngOnInit() {
    this.createForm();
  }

  getControl(form: FormGroup, key: string) {
    return (<FormArray>form.controls[key]).controls;
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
      category: ['', Validators.required],
      doc_type: ['', Validators.required]
    });
  }

  addNewDocument(item: FormControl): void {
    console.log(item);
    this.documents = this.form.get('documents') as FormArray;
    this.documents.push(this.createDocument());

    console.log(this.documents);
  }

  removeDocument(item: FormControl): void {
    console.log(item);
  }

  save() {
    this.isLoading = true;

    console.log(this.form.valid);
    console.log(this.form.value);

    this.motoristaController.insert(this.form.value)
    .pipe(finalize(() => {
      this.isLoading = false;
    }))
    .subscribe(res => {
      console.log(res);
    });
  }

}
