import {NgModule} from "@angular/core";

import {LayoutModule} from "app/features/layout/layout.module";
import {HomeModule} from "app/features/home/home.module";


const MODULES: any[] = [
    LayoutModule,
    HomeModule
];


@NgModule({
    imports: MODULES,
    exports: MODULES
})
export class Features {}
