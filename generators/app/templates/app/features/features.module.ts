import {NgModule} from "@angular/core";

import {LayoutModule} from "app/features/layout/layout.module";
import {HomeModule} from "app/features/home/home.module";
/* yang-add-feature-import - Yang will add features imports here */

const MODULES: any[] = [
   /* yang-add-feature-module - Yang will add features modules here */
   LayoutModule,
   HomeModule
];


@NgModule({
   imports: MODULES,
   exports: MODULES
})
export class Features {}
