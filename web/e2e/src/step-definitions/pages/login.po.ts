import { $, ElementFinder, browser } from 'protractor';

export class LoginPage {
    username: ElementFinder;
    senha: ElementFinder;
    buttonEnter: ElementFinder;
    bemVindo: ElementFinder;
    buttonUser: ElementFinder;
    buttonLogout: ElementFinder;

    constructor() {
        this.username = $('[formcontrolname="username"] input');
        this.senha = $('[formcontrolname="password"] input');
        this.buttonEnter = $('button.mat-primary');
        this.buttonUser = $('.px-button-user');
        this.buttonLogout = $('app-nav-current-user .mat-menu-item');
    }

    navigateTo() {
        return browser.get('/');
    }
}
