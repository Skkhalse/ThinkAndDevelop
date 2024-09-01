import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appPrimaryButton]'
})
export class PrimaryButtonDirective {


  
  constructor(el:ElementRef) { 

   
    el.nativeElement.style.color = 'white';
    el.nativeElement.style.backgroundColor = '#3699FF';
    el.nativeElement.style.width = "auto";
    el.nativeElement.style.height = "35px";
    el.nativeElement.style.cursor = "pointer";
    el.nativeElement.style.borderRadius = "5px";
    el.nativeElement.style.padding = "8px";
    el.nativeElement.style.border = "none";
  }

}
