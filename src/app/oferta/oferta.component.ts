import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/ofertas.model';
import { Observable } from 'rxjs';
import 'rxjs/Rx'
@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {
  public oferta:Oferta
  constructor(
    private route: ActivatedRoute, 
    private ofertasService:OfertasService
  ) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorId(this.route.snapshot.params['id'])
    .then((oferta:Oferta) => {
      this.oferta = oferta
     
    })
    /*
    this.route.params.subscribe(
      (parametro:any) => {console.log(parametro),
      (erro: any) => console.log(erro),
      () => console.log('processamento foi classificado como concluído!')
    })
      */

    let tempo = Observable.interval(2000)

    tempo.subscribe((intervalo: number) =>{
      console.log(intervalo)

    })

  }


}
