import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  InventoryServiceProxy,
  PagedResultDtoOfInventoryDto,
  RegisterInventoryDto,
  InventoryDto,
  FarmInfoDto
} from '@shared/service-proxies/service-proxies';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class InventoryService {

  inventory: InventoryDto[] = [];
  inventoryList: PagedResultDtoOfInventoryDto = null;

  constructor(
    private _inventoryServiceProxy: InventoryServiceProxy) {
  }

  get(id: number): Observable<InventoryDto> {
    return this._inventoryServiceProxy.get(id);
  }

  save(input: RegisterInventoryDto | InventoryDto | null | undefined): Observable<InventoryDto> {
    if (input instanceof RegisterInventoryDto) {
      return this._inventoryServiceProxy.create(<RegisterInventoryDto>input);
    } else {
      return this._inventoryServiceProxy.update(<InventoryDto>input);
    }
  }

  getAll(skipCount: number = 0, maxResultCount: number = 100, refresh: boolean = false): Observable<PagedResultDtoOfInventoryDto> {
    if (this.inventoryList && !refresh) {
      return of(this.inventoryList);
    }

    return this._inventoryServiceProxy.getAll(skipCount, maxResultCount)
      .pipe(
        map(data => {
          if (data) {
            this.inventoryList = data;
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
