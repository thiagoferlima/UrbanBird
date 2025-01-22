import { HttpClient } from "@angular/common/http"
import { Oferta } from "./shared/ofertas.model"
import { Injectable } from "@angular/core"
import { promise } from "protractor";
@Injectable()
export class OfertasService{

  private url_api = 'http://localhost:3000/ofertas'
    
    constructor(private http: HttpClient) {}

    public getOfertas(): Promise<Oferta[]> {
      return this.http
        .get<Oferta[]>(`${this.url_api}?destaque=true`) // Adicione o tipo Oferta[]
        .toPromise(); // Não precisa de then para resposta.json()
    }
  
    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
      return this.http
        .get<Oferta[]>(`${this.url_api}?categoria=${categoria}`)
        .toPromise();
    }

public getOfertasPorId(id: number): Promise<Oferta> {
  return this.http.get<Oferta[]>(`${this.url_api}?id=${id}`)
    .toPromise()
    .then((resposta: Oferta[]) => {
      // Verifique se a resposta contém dados e se está retornando a oferta certa
      return resposta[0]; 
    });
}

    
    
}