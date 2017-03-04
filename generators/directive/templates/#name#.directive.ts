import {Directive, AfterContentInit, ElementRef} from '@angular/core';

@Directive({
   selector: '[<%=kebabName%>]'
})
export class <%=titleName%>Directive implements AfterContentInit
{
   constructor(
      private element: ElementRef
   ) {}

   ngAfterContentInit() {
   }
}
