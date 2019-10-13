import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  LeatherServiceProxy,
  PagedResultDtoOfLeatherDto,
  CreateLeatherDto,
  LeatherDto,
  FarmInfoDto
} from '@shared/service-proxies/service-proxies';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class LeathersService {

  leathers: LeatherDto[] = [];
  leathersList: PagedResultDtoOfLeatherDto = null;

  constructor(
    private _leatherServiceProxy: LeatherServiceProxy) {
  }

  get(id: number): Observable<LeatherDto> {
    return this._leatherServiceProxy.get(id);
  }

  save(input: CreateLeatherDto | LeatherDto | null | undefined): Observable<LeatherDto> {
    if (input instanceof CreateLeatherDto) {
      return this._leatherServiceProxy.create(<CreateLeatherDto>input);
    } else {
      return this._leatherServiceProxy.update(<LeatherDto>input);
    }
  }

  getAll(skipCount: number = 0, maxResultCount: number = 100, refresh: boolean = false): Observable<PagedResultDtoOfLeatherDto> {
    if (this.leathersList && !refresh) {
      return of(this.leathersList);
    }

    return this._leatherServiceProxy.getAll(skipCount, maxResultCount)
      .pipe(
        map(data => {
          if (data) {
            this.leathersList = data;
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

  delete(id: number): Observable<void> {
    return this._leatherServiceProxy.delete(id);
  }

  getFarms(): Observable<FarmInfoDto[]> {
    return this._leatherServiceProxy.getFarms();
  }

  getDetails(id:number){
    return this._leatherServiceProxy.getDetails(id);
  }
}
