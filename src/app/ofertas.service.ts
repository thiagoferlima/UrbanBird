import { HttpClient } from "@angular/common/http"
import { Oferta } from "./shared/ofertas.model"
import { Injectable } from "@angular/core"
import { promise } from "protractor";
@Injectable()
export class OfertasService{
    
    constructor(private http: HttpClient) {}

    public getOfertas(): Promise<Oferta[]> {
      return this.http
        .get<Oferta[]>('http://localhost:3000/ofertas?destaque=true') // Adicione o tipo Oferta[]
        .toPromise(); // Não precisa de then para resposta.json()
    }
  
    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
      return this.http
        .get<Oferta[]>(`http://localhost:3000/ofertas?categoria=${categoria}`)
        .toPromise();
    }

    public getOfertasPorId(id: number): Promise<Oferta> {
      return this.http.get<Oferta[]>(`http://localhost:3000/ofertas?id=${id}`)
        .toPromise()
        .then((resposta: Oferta[]) => {
          return resposta[0]; 
        })
    }
    
    
}