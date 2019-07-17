import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { IUsuarioController } from '../../../core/interfaces/controllers/iusuario-controller';
import { UsuarioModel } from '../../../core/domain/entity/usuario-model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  isLoading: boolean;

  constructor(
    private fb: FormBuilder,
    private UsuarioController: IUsuarioController
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.isLoading = true;

    this.UsuarioController
      .login(this.form.value)
      .pipe(finalize(() => {
        this.isLoading = false;
      }))
      .subscribe((user: UsuarioModel) => {
        console.log(user);
      });
  }

}
