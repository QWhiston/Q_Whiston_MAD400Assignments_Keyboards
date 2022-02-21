import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  constructor() { 
    
  }

  mouseEnter(el: ElementRef){
    el.nativeElement.style.backgroundColor = "green";
  }

  mouseLeave(el: ElementRef){
    el.nativeElement.style.backgroundColor = "clear";
  }

}
