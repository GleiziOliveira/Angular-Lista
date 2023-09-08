import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'//esse appRed é um celetor
})
export class RedDirective {
//para trabalhar com as diretivas, será necessário que tenha uma referencia
//para injetar as config nos elementos. 

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = '#e35e6b'
  }

}
