import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Categoria } from '../models/Categoria';



@Injectable({
    providedIn: 'root'
})

export class CategoriaService {

    constructor( private httpClient : HttpClient)
    {
    }

    private readonly baseURL = environment["endPoint"];

    AdicionarCategoria(categoria:Categoria)
    {
        return  this.httpClient.post<Categoria>(`${this.baseURL}/AdicionarCategoria`,
        categoria)
    }

    ListarCategoriasUsuario(emailUsuario:string)
    {
        return  this.httpClient.get(`${this.baseURL}/ListarCategoriasUsuario?emailUsuario=${emailUsuario}`);       
    }

   
}