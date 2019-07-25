import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/infra/auth/auth.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { NotificationService } from '../../shared/notification/notification.service';
import { SharedModule } from '../../shared/shared.module';
import { IUsuarioController } from '../../../core/interfaces/controllers/iusuario-controller';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioModel } from 'src/app/core/domain/entity/usuario-model';
import { of, throwError } from 'rxjs';

class MockAuthService extends AuthService {
  authenticated = false;

  isAuthenticated() {
    return this.authenticated;
  }
}

describe('Component: Login', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: MockAuthService;
  let usuarioController: jasmine.SpyObj<IUsuarioController>;

  beforeEach(async(() => {
    const controllerSpy = jasmine.createSpyObj('IUsuarioController', ['login', 'logout']);

    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        FormBuilder,
        AuthService,
        MatSnackBar,
        NotificationService,
        { provide: IUsuarioController, useValue: controllerSpy }
      ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        SharedModule
      ]
    })
    .compileComponents();

    usuarioController = TestBed.get(IUsuarioController);
  }));

  beforeEach(() => {
    authService = new MockAuthService();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    authService = null;
    component = null;
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();

    component.ngOnInit();
  });

  describe('login', () => {
    it('deve retornar um usuario', () => {
      const param = {
        username: 'test',
        password: '123'
      };

      usuarioController.login.and.returnValue(of(new UsuarioModel()));

      component.login();

      expect(usuarioController.login.calls.count()).toBe(1);

      usuarioController.login(param).subscribe(usuario => {
        if (usuario) {
          expect(usuario).toBeTruthy();
        }
      });
    });

    it('deve retornar um usuario null', () => {
      const param = {
        username: 'test',
        password: '123'
      };

      usuarioController.login.and.returnValue(of(null));

      component.login();

      expect(usuarioController.login.calls.count()).toBe(1);

      usuarioController.login(param).subscribe(usuario => {
        if (!usuario) {
          expect(usuario).toBeNull();
        }
      });
    });

    it('deve retornar um erro', () => {
      const param = {
        username: '',
        password: ''
      };

      usuarioController.login.and.returnValue(throwError(''));

      component.login();

      expect(usuarioController.login.calls.count()).toBe(1);

      usuarioController.login(param);
    });
  });
});
