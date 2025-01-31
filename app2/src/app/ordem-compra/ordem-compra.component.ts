import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco:string= ''
  public numero: string = ''
  public  complemento: string =''
  public formaPagamento: string=''


  public enderecoValido: boolean
  public numeroValido: boolean
  public complementoValido: boolean
  public formaPagamentoValido: boolean


  constructor() { }

  ngOnInit() {
  }
  public atulizaEndereco(endereco:string): void{
    this.endereco = endereco
    //console.log(this.endereco)
    if(this.endereco.length > 3){
      this.enderecoValido = true
    }else{
      this.enderecoValido= false
    }
  }
  public atulizaNumero(numero:string):void{
    this.numero = numero
    //console.log(this.numero)
    if(this.numero.length> 0){
      this.numeroValido = true
    }else{
      this.numeroValido = false
    }

  }
  public atulizaComplemento(complemento: string): void{
    this.complemento = complemento
   // console.log(this.complemento)
   if(this.complemento.length> 0){
    this.complementoValido= true
   }else{
    this.complementoValido=false
   }

  }
  public atualizaFormaPagamento(formaPagamento:string):void{
    this.formaPagamento = formaPagamento
    //console.log(this.formaPagamento)
    if(this.formaPagamento.length> 0){
      this.formaPagamentoValido = true
    }
    else{
      this.formaPagamentoValido = false
    }

  }

}
