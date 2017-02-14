import {NgModule} from '@angular/core';
import {SharedModule} from "app/shared/shared.module";
import {HomeComponent} from "app/features/home/home.component";
import {HomeRoutes} from "app/features/home/home-routing.module";


@NgModule({
    imports: [
        SharedModule,
        HomeRoutes
    ],
    declarations: [ HomeComponent ]
})
export class HomeModule {}
