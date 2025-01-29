import { Pipe, PipeTransform } from "@angular/core";
import { text } from "@angular/core/src/render3";

@Pipe({
    name: 'descricaoReduzida'
})
export class descricaoReduzida implements PipeTransform{
    transform(texto: string): string {
        if(texto.length > 15){
            return texto.substr(0,15) , '...'
        }
        return texto
    }
}