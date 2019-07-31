import { $, ElementFinder, browser } from 'protractor';

export class DialogPage {
    titulo: ElementFinder;
    inputNome: ElementFinder;
    inputDataNascimento: ElementFinder;
    inputTelefone: ElementFinder;
    inputTipoDocumento: ElementFinder;
    inputNumero: ElementFinder;
    btnSalvar: ElementFinder;

    constructor() {
        this.titulo = $('app-dialog-cadastro .mat-dialog-title');
        this.inputNome = $('app-dialog-cadastro app-input[t-label="Nome"] input');
        this.inputDataNascimento = $('app-dialog-cadastro app-input[t-label="Data de nascimento"] input');
        this.inputTelefone = $('app-dialog-cadastro app-input[t-label="Telefone"] input');
        this.inputTipoDocumento = $('app-dialog-cadastro .t-radio-group .mat-radio-button:nth-child(1)');
        this.inputNumero = $('app-dialog-cadastro app-input[t-label="Número"] input');
        this.btnSalvar = $('app-dialog-cadastro button[type="submit"]');
    }
}
