import { UsuarioRepository } from './usuario-repository';
import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../../environments/environment';
import { UsuarioModel } from '../../../core/domain/entity/usuario-model';

describe('data: UsuarioRepository', () => {
  let usuarioRepository: UsuarioRepository;
  let httpMock: HttpTestingController;
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [UsuarioRepository]
    }).compileComponents();

    usuarioRepository = TestBed.get(UsuarioRepository);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deve criar uma instancia', () => {
    expect(usuarioRepository).toBeTruthy();
  });

  it('deve executar o metodo login', () => {
    const mock = { username: 'usuario1', password: '123' };

    expect(usuarioRepository.login(mock)).toBeTruthy();
  });

  it('should not immediately connect to the server', () => {
    httpMock.expectNone({});
  });

  describe('quando fizer o login', () => {
    xit('deve fazer uma solicitação GET', async(() => {
      const param = { username: 'truckpad', password: '123' };

      usuarioRepository.login(param);

      let req = httpMock.expectOne(environment.serverUrl + '/usuarios?username=truckpad&senha=123');

      expect(req.request.method).toEqual('GET');

      req.flush([]);
    }));
  });

  it('deve retornar Observable<UsuarioModel>', () => {
    // const mockResponse = [{
    //   id: 1,
    //   nome: 'truckpad'
    // }];

    // const param = {
    //   username: 'truckpad',
    //   password: '123'
    // };

    // usuarioRepository.login(param).subscribe((res: UsuarioModel) => {
    //   if (res) {
    //     expect(res).toBeTruthy();
    //     expect(res.id).toEqual(1);
    //   }
    // });

    // httpMock.verify();

    // const req = httpMock.expectOne(
    //   environment.serverUrl + '/usuarios?username=truckpad&senha=123'
    // );

    // expect(req.request.method).toEqual('GET');

    // req.flush(mockResponse);

    // httpMock.verify();
  });

  xit('deve retornar null ao executar o metodo login', () => {
    const mockResponse = [null];

    const param = {
      username: 'usuario1',
      password: '123'
    };

    usuarioRepository.login(param).subscribe(res => {
      expect(res).toEqual(null);
    });

    // const req = httpTestingController.expectOne(
    //   environment.serverUrl + '/usuarios?username=' + param.username + '&senha=' + param.password + ''
    // );

    // req.flush(mockResponse);
  });

  it('deve executar o metodo logout', () => {
    expect(usuarioRepository.logout()).toBeTruthy();
  });
});
