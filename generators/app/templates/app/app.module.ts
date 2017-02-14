// Angular Modules
import {NgModule, APP_INITIALIZER} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// Components
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core.module';
import {Features} from './features/features.module';
import {AppComponent} from './app.component';
import {AppInitializer} from "app/app.initializer";



@NgModule({
   providers: [
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
   imports: [
      BrowserModule,
      CoreModule,
      AppRoutingModule,
      Features
   ],
   declarations: [
      AppComponent
   ],
   bootstrap: [ AppComponent ]
})
export class AppModule { }
