import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  FarmServiceProxy,
  PagedResultDtoOfFarmDto,
  FarmDto,
  CreateFarmDto
} from '@shared/service-proxies/service-proxies';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class FarmsService {

  farms: FarmDto[] = [];
  farmsList: PagedResultDtoOfFarmDto = null;

  constructor(
    private _farmServiceProxy: FarmServiceProxy) {
  }

  get(id: number): Observable<FarmDto> {
    return this._farmServiceProxy.get(id);
  }

  save(input: CreateFarmDto | FarmDto | null | undefined): Observable<FarmDto> {
    if (input instanceof CreateFarmDto) {
      return this._farmServiceProxy.create(<CreateFarmDto>input);
    } else {
      return this._farmServiceProxy.update(<FarmDto>input);
    }
  }

  getAll(skipCount: number = 0, maxResultCount: number = 100, refresh: boolean = false): Observable<PagedResultDtoOfFarmDto> {
    if (this.farmsList && !refresh) {
      return of(this.farmsList);
    }

    return this._farmServiceProxy.getAll(skipCount, maxResultCount)
      .pipe(
        map(data => {
          if (data) {
            this.farmsList = data;
            return data;
          }
          console.log(`Tenants was not found`);
          return null;
        }),
        catchError(error => {
          console.log(`Retrieval error: ${error}`);
          return of(null);
        })
      );
  }

  delete(id: number): Observable<void> {
    return this._farmServiceProxy.delete(id);
  }
}
