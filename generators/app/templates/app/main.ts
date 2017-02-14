import { CONFIG } from './config';

import './polyfills';

// App Styles
import 'app/resources/styles/app.scss';

// Bootstrap Angular
import {enableProdMode} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from './app.module';

if (CONFIG.production)
    enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
