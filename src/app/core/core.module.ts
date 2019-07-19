import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IValidatorMessage } from './interfaces/message/ivalidator-message';
import { ValidatorMessageService } from './message/validator-message.service';
import { IUsuarioUseCase } from './interfaces/usecases/iusuario-use-case';
import { UsuarioUseCase } from './usecases/usuario/usuario-use-case';
import { IMotoristaUsecase } from './interfaces/usecases/imotorista-usecase';
import { MotoristaUsecaseService } from './usecases/motorista/motorista-usecase.service';
import { IUsuarioValidator } from './interfaces/validations/iusuario-validator';
import { UsuarioValidatorService } from './usecases/usuario/usuario-validator.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: IValidatorMessage, useClass: ValidatorMessageService },
    { provide: IUsuarioUseCase, useClass: UsuarioUseCase },
    { provide: IUsuarioValidator, useClass: UsuarioValidatorService },
    { provide: IMotoristaUsecase, useClass: MotoristaUsecaseService },
  ],
})
export class CoreModule { }
