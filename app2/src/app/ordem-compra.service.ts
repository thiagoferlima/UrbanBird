import { Pedido } from "./shared/pedido.model"
import { Injectable } from "@angular/core"
import { Http, RequestOptions, Headers, Response } from "@angular/http"
import { Observable } from "rxjs/Observable"
import { URL_API } from "./app.api"
@Injectable()
export class OrdemCompraService{
    constructor(private http: Http){}
    public efetivarCompra(pedido:Pedido): Observable<any>{
        let headers :  Headers = new Headers()

        headers.append('content-type', 'application/json')
        return this.http.post(
            `${URL_API}/pedidos`,
            JSON.stringify(pedido),
            new RequestOptions({headers: headers })



        )
        .map((resposta: Response) => console.log(resposta.json()))
    }
}