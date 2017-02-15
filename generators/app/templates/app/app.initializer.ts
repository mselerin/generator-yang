import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {LOGGER, LogLevelEnum} from "app/services/logger.service";

@Injectable()
export class AppInitializer
{
   constructor() {}

   public init(): Promise<void> {
      console.log('Initializing application');

      LOGGER.clientLogLevel = LogLevelEnum.DEBUG;
      LOGGER.serverLogLevel = LogLevelEnum.ERROR;

      // LOGGER.loggingServiceUrl = '/api/log';

      LOGGER.info('Application initialized');
      return Observable.of(null).toPromise();
   }
}
