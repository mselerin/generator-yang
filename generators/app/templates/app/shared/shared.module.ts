// Angular Modules
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

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
   HttpClientModule,
   RouterModule,
   BrowserAnimationsModule,
   TranslateModule,
];

const DECLARATIONS = [
   PropercasePipe,
   /* yang-add-pipe-declaration - Yang will add pipes declarations here */

   PageHeaderComponent,
   /* yang-add-component-declaration - Yang will add components declarations here */

   /* yang-add-directive-declaration - Yang will add directives declarations here */
   SampleDirective
];


@NgModule({
   imports: MODULES,
   declarations: DECLARATIONS,
   exports: [...MODULES, ...DECLARATIONS]
})
export class SharedModule { }
