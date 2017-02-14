import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class AppInitializer
{
   constructor() {}

   public init(): Promise<void> {
      console.log('Initializing application');
      return Observable.of(null).toPromise();
   }
}
