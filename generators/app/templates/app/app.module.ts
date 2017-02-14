// Angular Modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// Components
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core.module';
import {Features} from './features/features.module';
import {AppComponent} from './app.component';



@NgModule({
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
