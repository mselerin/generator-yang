import * as _ from 'lodash';

import {Injectable} from "@angular/core";
import {AppConfig} from "app/models/app-config.model";
import {Http} from "@angular/http";

@Injectable()
export class ConfigService
{
    constructor(
        private http:Http,
        public appConfig:AppConfig
    ) { }

    loadConfig(): Promise<any> {
        let url = 'app/resources/config/app-config.json';

        return this.http.get(url)
            .map(res => res.json())
            .map(data => _.merge(this.appConfig, data))
            .toPromise();
    }
}
