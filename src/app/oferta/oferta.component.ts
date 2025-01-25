import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/ofertas.model';
import { Observable } from 'rxjs';
import 'rxjs/Rx'
import { Observer } from 'rxjs';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {
  private tempoObservableSubscription: Subscription
  private meuObservableTesteSubscription:Subscription
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

    this.tempoObservableSubscription = tempo.subscribe((intervalo: number) =>{
      console.log(intervalo)

    })
      

    let meuObservableTeste = Observable.create((observer: Observer<number>)=> {
     observer.next(1)
     observer.next(3)
     observer.complete()
     observer.next(3)


    })



     this.meuObservableTesteSubscription=meuObservableTeste.subscribe(
      (resultado:number) => console.log(resultado + 10),
      (erro:string) => console.log(erro),
      () => console.log('Stream de eventos foi finalizada')
    )
  }
  ngOnDestroy(): void {
    this.meuObservableTesteSubscription.unsubscribe()
    this.tempoObservableSubscription.unsubscribe()
  }


}
