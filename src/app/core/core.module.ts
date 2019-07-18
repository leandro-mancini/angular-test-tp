import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IUsuarioUseCase } from './interfaces/usecases/iusuario-use-case';
import { UsuarioUseCase } from './usecases/usuario/usuario-use-case';
import { IMotoristaUsecase } from './interfaces/usecases/imotorista-usecase';
import { MotoristaUsecaseService } from './usecases/motorista/motorista-usecase.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: IUsuarioUseCase, useClass: UsuarioUseCase },
    { provide: IMotoristaUsecase, useClass: MotoristaUsecaseService }
  ],
})
export class CoreModule { }
