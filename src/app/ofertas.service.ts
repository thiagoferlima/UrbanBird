import { HttpClient } from "@angular/common/http"
import { Oferta } from "./shared/ofertas.model"
import { Injectable } from "@angular/core"
import { promise } from "protractor";
import { URL_API } from "./app.api";
import { Observable } from "rxjs";
import  "rxjs/add/operator/map";
import  "rxjs/add/operator/retry";
@Injectable()
export class OfertasService{
    
    constructor(private http: HttpClient) {}

    public getOfertas(): Promise<Oferta[]> {
      return this.http
        .get<Oferta[]>(`${URL_API}/ofertas?destaque=true`) // Adicione o tipo Oferta[]
        .toPromise(); // Não precisa de then para resposta.json()
    }
  
    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
      return this.http
        .get<Oferta[]>(`${URL_API}/ofertas?categoria=${categoria}`)
        .toPromise();
    }

public getOfertasPorId(id: number): Promise<Oferta> {
  return this.http.get<Oferta[]>(`${URL_API}/ofertas?id=${id}`)
    .toPromise()
    .then((resposta: Oferta[]) => {
      // Verifique se a resposta contém dados e se está retornando a oferta certa
      return resposta[0]; 
    });
}
public getComoUsarOfertaPorId(id: number): Promise<string> {
  return this.http.get<any[]>(`${URL_API}/como-usar?id=${id}`)
    .toPromise()
    .then((resposta: any[]) => {
      return resposta[0].descricao
    });
}
public getOndeFicaOfertaPorId(id: number): Promise<string> {
  return this.http.get<any[]>(`${URL_API}/onde-fica?id=${id}`)
    .toPromise()
    .then((resposta: any[]) => {
      return resposta[0].descricao
    });
}

public pesquisaOfertas(termo: string): Observable<Oferta[]> {
  return this.http.get<Oferta[]>(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
  .retry(10)
}


    
    
}