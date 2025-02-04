import { Pedido } from "./shared/pedido.model"
import { Injectable } from "@angular/core"
import { Http } from "@angular/http"
export class OrdemCompraService{
    constructor(private http: Http){}
    public efetivarCompra(pedido:Pedido): void{
        console.log(pedido)
    }
}