import {Component} from "@angular/core";
import {Router, NavigationError} from "@angular/router";
import {LOGGER} from "./services/logger.service";

@Component({
    selector: 'app-wrapper',
    template: `<app-layout></app-layout>`
})
export class AppComponent {
    constructor(
        private router: Router
    ) {
        this.router.events
            .filter(event => event instanceof NavigationError)
            .subscribe((event: NavigationError) => {
                LOGGER.warn(event.error)
            });
    }
}
