// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';


// Angular Modules
import {NgModule, SkipSelf, Optional, APP_INITIALIZER} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";

// Constants
import {Session} from 'app/app.session';

// Services
import {AppInitializer} from 'app/app.initializer';


const MODULES: any[] = [
   CommonModule,
   FormsModule,
   HttpModule,
   RouterModule
];


@NgModule({
   providers: [
      Session,

      // Initialisation de l'application
      AppInitializer,
      {
         provide: APP_INITIALIZER,
         multi: true,
         // Doit retourner une fonction qui renvoie une Promise
         useFactory: (appInit: AppInitializer) => () => appInit.init(),
         deps: [AppInitializer]
      }
   ],
   imports: MODULES,
   exports: MODULES
})
export class CoreModule {
   constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
      if (parentModule) {
         throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
      }
   }
}
