import {Directive, AfterContentInit, ElementRef} from '@angular/core';

@Directive({
    selector: '[appSample]'
})
export class SampleDirective implements AfterContentInit
{
    constructor(
        private element: ElementRef
    ) {}

    ngAfterContentInit() {
        console.log(this.element);
    }
}
