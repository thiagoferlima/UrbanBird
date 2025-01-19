import { HttpClient } from "@angular/common/http"
import { Oferta } from "./shared/ofertas.model"
import { Injectable } from "@angular/core"
import { lastValueFrom } from 'rxjs';
@Injectable()
export class OfertasService{
    
    constructor(private http: HttpClient) {}

    public getOfertas(): Promise<Oferta[]> {
        return lastValueFrom(this.http.get<Oferta[]>('http://localhost:3000/ofertas?destaque=true'));
      }
    
}