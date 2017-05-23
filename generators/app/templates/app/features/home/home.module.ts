import {NgModule} from '@angular/core';
import {SharedModule} from "app/shared/shared.module";
import {HomeComponent} from "app/features/home/home.component";
import {HomeRoutes} from "app/features/home/home-routing.module";
/* yang-add-component-import - Yang will add components imports here */


@NgModule({
   imports: [
      /* yang-add-component-declaration - Yang will add components declarations here */
      SharedModule,
      HomeRoutes
   ],
   declarations: [ HomeComponent ]
})
export class HomeModule {}
