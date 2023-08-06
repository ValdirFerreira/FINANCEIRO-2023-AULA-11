
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private usuarioAutenticadoPortal: boolean = false;
    private token: any;
    private user: any;

    constructor(private httpClient: HttpClient) {
    }

    checkToken() {
        return Promise.resolve(true);
    }

    UsuarioAutenticado(status: boolean) {
        localStorage.setItem('usuarioAutenticadoPortal', JSON.stringify(status));
        this.usuarioAutenticadoPortal = status;
    }

    UsuarioEstaAutenticado(): Promise<boolean> {
        this.usuarioAutenticadoPortal = localStorage.getItem('usuarioAutenticadoPortal') == 'true';
        return Promise.resolve(this.usuarioAutenticadoPortal);
    }

    setToken(token: string) {
        localStorage.setItem('token', token);
        this.token = token;
    }

    get getToken() {
        this.token = localStorage.getItem('token');
        return this.token;
    }

    limparToken() {
        this.token = null;
        this.user = null;
    }

    limparDadosUsuario() {
        this.UsuarioAutenticado(false);
        this.limparToken();
        localStorage.clear();
        sessionStorage.clear();
    }

    setEmailUser(email: string) {
        localStorage.setItem('emailUser', email);
    }

    getEmailUser() {
        var emailUserLogado = localStorage.getItem('emailUser');
        if (emailUserLogado) {
            return emailUserLogado;
        }
        else {
            this.limparDadosUsuario();
            return "";
        }
    }




}