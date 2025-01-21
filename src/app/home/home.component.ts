import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/ofertas.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService],
})
export class HomeComponent implements OnInit {
  public ofertas: Oferta[] = []; // Inicialize como um array vazio

  constructor(private ofertasService: OfertasService) {}

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('restaurante')
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas; // Atualize o array de ofertas
        console.log('Ofertas recebidas:', this.ofertas);
      })
      .catch((error: any) => {
        console.error('Erro ao buscar ofertas:', error);
      });
  }
}
