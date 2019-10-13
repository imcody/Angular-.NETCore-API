import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TanneryLeatherDto, TanneryServiceProxy, RegisterTanneryLeatherInput, UpdateTanneryLeatherInput, EntityDtoOfInt64, ValidateLeatherInput } from '@app/shared/service-proxies/service-proxies';

@Injectable()
export class TanneryLeathersService {

  constructor(
    private _leatherServiceProxy: TanneryServiceProxy) {
  }

  validate(input: ValidateLeatherInput): Observable<boolean> {
    return this._leatherServiceProxy.isValid(input);
  }
  
  save(input: RegisterTanneryLeatherInput | UpdateTanneryLeatherInput | null | undefined): Observable<boolean> {
    if (input instanceof RegisterTanneryLeatherInput) {
      return this._leatherServiceProxy.registerLeather(<RegisterTanneryLeatherInput>input);
    } else {
      return this._leatherServiceProxy.update(<UpdateTanneryLeatherInput>input);
    }
  }

  getAll(skipCount: number = 0, maxResultCount: number = 100, refresh: boolean = false): Observable<TanneryLeatherDto[]> {
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

  moveToStorage(leatherId: number){
    return this._leatherServiceProxy.moveToStorage(new EntityDtoOfInt64({id: leatherId}));
  }
}
