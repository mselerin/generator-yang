// Angular Modules
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";

// Pipes
import {PropercasePipe} from './pipes/propercase.pipe';

// Components
import {PageHeaderComponent} from './components/page-header.component';

// Directives
import {SampleDirective} from './directives/sample.directive';


const MODULES: any[] = [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule
];

const DECLARATIONS = [
    PropercasePipe,
    PageHeaderComponent,
    SampleDirective
];


@NgModule({
    imports: MODULES,
    declarations: DECLARATIONS,
    exports: [].concat(MODULES, DECLARATIONS)
})
export class SharedModule { }
