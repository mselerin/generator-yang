import {CONFIG} from './config';

import './polyfills';
/* yang-add-main-library */


/* yang-add-main-styles */


// App Styles
import 'app/resources/styles/app.scss';
/* yang-add-app-styles */


// Bootstrap Angular
import {enableProdMode} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from './app.module';

if (CONFIG.production)
    enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
