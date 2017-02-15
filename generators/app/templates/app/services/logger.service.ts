export enum LogLevelEnum {
   DEBUG = 0,
   INFO = 1,
   WARN = 2,
   ERROR = 3,
   NONE = 9
}


export class LoggerService
{
   public loggingServiceUrl: string;
   public clientLogLevel: LogLevelEnum;
   public serverLogLevel: LogLevelEnum;


   constructor() {
      this.loggingServiceUrl = null;
      this.clientLogLevel = LogLevelEnum.INFO;
      this.serverLogLevel = LogLevelEnum.ERROR;
   }


   public debug(msg: string): void {
      this.log(LogLevelEnum.DEBUG, msg);
   }

   public info(msg: string): void {
      this.log(LogLevelEnum.INFO, msg);
   }

   public warn(msg: string): void {
      this.log(LogLevelEnum.WARN, msg);
   }

   public error(msg: string): void {
      this.log(LogLevelEnum.ERROR, msg);
   }



   protected log(level: LogLevelEnum, msg: string): void
   {
      let logLevelStr: string = LogLevelEnum[level].toUpperCase();
      let logFunction: string = logLevelStr.toLowerCase();


      // Log dans la console
      if (level >= this.clientLogLevel) {
         console[logFunction](logLevelStr, msg);
      }


      // Log vers le serveur
      if (level >= this.serverLogLevel && this.loggingServiceUrl) {
         fetch(`${this.loggingServiceUrl}/${logLevelStr}`, {
            method: 'POST',
            body: msg
         });
      }
   }

}

export const LOGGER = new LoggerService();
