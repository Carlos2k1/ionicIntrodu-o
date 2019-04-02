import { Noticias } from "../model/noticias";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class NoticiaService{
    constructor(private http : HttpClient){
    }
    listaDeNoticia() : Observable<Noticias[]> {
        return this.http.get<Noticias[]>('http://www.mocky.io/v2/5ca284633300009800d34040');
    }
}
