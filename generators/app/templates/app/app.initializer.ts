import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {LOGGER, LogLevelEnum} from "app/services/logger.service";
import {TranslateService} from "@ngx-translate/core";

@Injectable()
export class AppInitializer
{
   constructor(
       protected translate: TranslateService
   ) {}

   public init(): Promise<void> {
       console.log('Initializing application');

       // Logging
       LOGGER.clientLogLevel = LogLevelEnum.DEBUG;
       LOGGER.serverLogLevel = LogLevelEnum.ERROR;

       // LOGGER.loggingServiceUrl = '/api/log';

       // Translation
       this.translate.addLangs(["en", "fr"]);
       this.translate.setDefaultLang('fr');

       // Langue du navigateur
       let browserLang = this.translate.getBrowserLang();
       LOGGER.debug(`Detected browser language : ${browserLang}`);

       if (this.translate.getLangs().indexOf(browserLang) === -1)
           browserLang = 'fr';

       LOGGER.debug(`Using language : ${browserLang}`);
       this.translate.use(browserLang);

       LOGGER.info('Application initialized');
       return Observable.of(null).toPromise();
   }
}
