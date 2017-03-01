import {CONFIG} from "app/config";
import {Component} from "@angular/core";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent {
    config = CONFIG;
}
