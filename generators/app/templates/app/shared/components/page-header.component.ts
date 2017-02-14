import { Component, Input } from '@angular/core';

@Component({
    selector: 'page-header',
    templateUrl: './page-header.component.html'
})
export class PageHeaderComponent {
    @Input() title: string;
    @Input() subtitle: string;
}
