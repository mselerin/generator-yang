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
import {HttpModule, Http} from '@angular/http';
import {RouterModule} from "@angular/router";
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';

// Constants
import {AppConfig} from "app/models/app-config.model";
import {Session} from 'app/app.session';

// Services
import {ConfigService} from "app/services/config.service";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {AppInitializer} from 'app/app.initializer';
/* yang-add-service-import - Yang will add services imports here */


// App init
export function appInitFactory(appInit: AppInitializer) {
   return () => appInit.init();
}


// Translation
export function HttpLoaderFactory(http: Http) {
   return new TranslateHttpLoader(http, 'app/resources/i18n/', '.json');
}


@NgModule({
   providers: [
      AppConfig,
      ConfigService,
      Session,
      /* yang-add-service-provider - Yang will add services providers here */

      // Initialisation de l'application
      AppInitializer,
      {
         provide: APP_INITIALIZER,
         multi: true,
         // Doit retourner une fonction qui renvoie une Promise
         useFactory: appInitFactory,
         deps: [AppInitializer]
      }
   ],
   imports: [
      CommonModule,
      FormsModule,
      HttpModule,
      RouterModule,
      TranslateModule.forRoot({
         loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [Http]
         }
      })
   ]
})
export class CoreModule {
   constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
      if (parentModule) {
         throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
      }
   }
}
