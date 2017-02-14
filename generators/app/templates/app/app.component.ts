import {Component} from "@angular/core";
import {Router, NavigationError, NavigationStart, NavigationEnd, NavigationCancel} from "@angular/router";
import {Logger} from "./services/logger.service";

@Component({
    selector: 'app-wrapper',
    template: `<app-layout></app-layout>`
})
export class AppComponent {
    constructor(
        private router: Router,
        private logger: Logger
    ) {
        this.router.events.subscribe((event) =>
        {
            if (event instanceof NavigationStart) {
                this.logger.debug('NavigationStart', event);
            }
            else if (event instanceof NavigationEnd
                || event instanceof NavigationCancel
                || event instanceof NavigationError
            ) {
                this.logger.debug('NavigationEnd | Cancel | Error', event);
            }


            if (event instanceof NavigationError) {
                this.logger.warn(event.error)
            }
        });
    }
}
