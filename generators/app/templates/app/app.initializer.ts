import {Injectable} from "@angular/core";
import {LOGGER, LogLevelEnum} from "app/services/logger.service";
import {TranslateService} from "@ngx-translate/core";
import {ConfigService} from "app/services/config.service";
import {AppConfig} from "app/models/app-config.model";

@Injectable()
export class AppInitializer
{
    constructor(
        protected configService: ConfigService,
        protected translate: TranslateService
    ) {}

    public init(): Promise<void> {
        console.log('Initializing application');

        return this.configService.loadConfig()
            .then((config: AppConfig) => {
                // Logging
                LOGGER.clientLogLevel = LogLevelEnum.DEBUG;
                LOGGER.serverLogLevel = LogLevelEnum.ERROR;

                // LOGGER.loggingServiceUrl = '/api/log';

                // Translation
                this.translate.addLangs(config.languages);
                this.translate.setDefaultLang(config.lang);

                // Langue du navigateur
                let browserLang = this.translate.getBrowserLang();
                LOGGER.debug(`Detected browser language : ${browserLang}`);

                if (this.translate.getLangs().indexOf(browserLang) === -1)
                    browserLang = 'fr';

                LOGGER.debug(`Using language : ${browserLang}`);
                return this.translate.use(browserLang).toPromise();
            })
           .then(() => {
              LOGGER.info('Application initialized');
           });
    }
}
