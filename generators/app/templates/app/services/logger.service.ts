import { Injectable } from '@angular/core';

@Injectable()
export class Logger
{
    constructor() {}

    debug(msg:string, ...optionalParams: any[]): void {
        console.debug(`[debug] ${msg}`, optionalParams);
    }

    info(msg:string, ...optionalParams: any[]): void {
        console.info(`[info] ${msg}`, optionalParams);
    }

    warn(msg:string, ...optionalParams: any[]): void {
        console.warn(`[warning] ${msg}`, optionalParams);
    }

    error(msg:string, ...optionalParams: any[]): void {
        console.error(`[error] ${msg}`, optionalParams);
    }
}
