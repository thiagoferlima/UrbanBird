import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/ofertas.model';
import { Observable, Subject } from 'rxjs';
import { NgLocaleLocalization } from '@angular/common';
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/observable/of'
@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers:[OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  private subjectPesquisa:Subject<string> = new Subject<string>()
  constructor(private ofertaService:OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
    .debounceTime(1000)
    .switchMap((termo:string)=> {
      console.log('Requisicao http para api: ', termo)
      if(termo.trim() === ''){
        return Observable.of<Oferta[]>([])
      }
      return this.ofertaService.pesquisaOfertas(termo)
    })
    this.ofertas.subscribe((ofertas:Oferta[])=> console.log(ofertas))
  }
  public pesquisa(termoDaBusca: string):void{
    console.log('keyup caracter: ', termoDaBusca)
   this.subjectPesquisa.next(termoDaBusca)
  }

}
