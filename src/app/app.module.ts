import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PresentationModule } from './presentation/presentation.module';
import { CoreModule } from './core/core.module';
import { InfraModule } from './infra/infra.module';
import { DataModule } from './data/data.module';

import { IUsuarioController } from './core/interfaces/controllers/iusuario-controller';
import { UsuarioControllerService } from './presentation/controllers/usuario/usuario-controller.service';
import { IUsuarioUseCase } from './core/interfaces/usecases/iusuario-use-case';
import { UsuarioUseCase } from './core/usecases/usuario/usuario-use-case';
import { IUsuarioRepository } from './core/interfaces/repository/iusuario-repository';
import { UsuarioRepository } from './data/repository/usuario/usuario-repository';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    DataModule,
    InfraModule,
    PresentationModule,
    NgbModule.forRoot()
  ],
  providers: [
    { provide: IUsuarioController, useClass: UsuarioControllerService },
    { provide: IUsuarioUseCase, useClass: UsuarioUseCase },
    { provide: IUsuarioRepository, useClass: UsuarioRepository },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
