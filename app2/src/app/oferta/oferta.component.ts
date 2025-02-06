import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../ofertas.services'
import { Oferta } from '../shared/oferta.model'
import CarrinhoService from 'app/carrinho.service';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService, CarrinhoService]
})
export class OfertaComponent implements OnInit, OnDestroy {
 
  public oferta: Oferta
  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    console.log('Oferta - Array : ', this.carrinhoService.exibirItens())

     this.route.params.subscribe((parametro: any) => {
      this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta
      })

    })


    
  }
  ngOnDestroy(){
   
  }

}
