// Rxjs
import 'rxjs';

// Angular Modules
import {NgModule, SkipSelf, Optional, APP_INITIALIZER} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';

// Constants
import {AppConfig} from "app/models/app-config.model";
import {Session} from 'app/app.session';

// Services
import {ConfigService} from "app/services/config.service";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {AppInitializer} from 'app/app.initializer';
/* yang-add-service-import - Yang will add services import here */

// Others modules
/* yang-add-core-module-import - Yang will add core module import here */

// App init
export function appInitFactory(appInit: AppInitializer) {
   return () => appInit.init();
}


// Translation
export function HttpLoaderFactory(http: HttpClient) {
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
      HttpClientModule,
      /* yang-add-core-module - Yang will add core module imports here */
      TranslateModule.forRoot({
         loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
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
