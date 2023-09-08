import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {
  
  //esse myForEm é o que está dizendo que vai pegar o em do arrey do footer

  constructor() {

   }
   ngOnInit(): void {

   }

}
