// Angular Modules
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

// Pipes
import {PropercasePipe} from './pipes/propercase.pipe';
/* yang-add-pipe-import - Yang will add pipes imports here */

// Components
import {PageHeaderComponent} from './components/page-header.component';
/* yang-add-component-import - Yang will add components imports here */

// Directives
import {SampleDirective} from './directives/sample.directive';
/* yang-add-directive-import - Yang will add directives imports here */


const MODULES: any[] = [
   CommonModule,
   FormsModule,
   HttpModule,
   RouterModule,
   TranslateModule
];

const DECLARATIONS = [
   /* yang-add-pipe-declaration - Yang will add pipes declarations here */
   PropercasePipe,

   /* yang-add-component-declaration - Yang will add components declarations here */
   PageHeaderComponent,

   /* yang-add-directive-declaration - Yang will add directives declarations here */
   SampleDirective
];


@NgModule({
   imports: MODULES,
   declarations: DECLARATIONS,
   exports: [].concat(MODULES, DECLARATIONS)
})
export class SharedModule { }
