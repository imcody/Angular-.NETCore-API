import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SlaughterhouseLeatherDto, SlaughterhouseServiceProxy, RegisterLeatherInput, UpdateLeatherInput, ValidateLeatherInput } from '@app/shared/service-proxies/service-proxies';

@Injectable()
export class SlaughterLeathersService {

  constructor(
    private _leatherServiceProxy: SlaughterhouseServiceProxy) {
  }

  validate(input: ValidateLeatherInput): Observable<boolean> {
    return this._leatherServiceProxy.isValid(input);
  }

  save(input: RegisterLeatherInput | UpdateLeatherInput | null | undefined): Observable<boolean> {
    if (input instanceof RegisterLeatherInput) {
      return this._leatherServiceProxy.registerLeather(<RegisterLeatherInput>input);
    } else {
      return this._leatherServiceProxy.update(<UpdateLeatherInput>input);
    }
  }

  getAll(skipCount: number = 0, maxResultCount: number = 100, refresh: boolean = false): Observable<SlaughterhouseLeatherDto[]> {
    return this._leatherServiceProxy.getAll()
      .pipe(
        map(data => {
          if (data) {
            return data;
          }
          return null;
        }),
        catchError(error => {
          console.log(`Retrieval error: ${error}`);
          return of(null);
        })
      );
  }
}
