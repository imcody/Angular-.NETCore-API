import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  ProductionServiceProxy,
  PagedResultDtoOfProductionDto,
  ProductionDto,
  FarmInfoDto,
  InventoryItemDto
} from '@shared/service-proxies/service-proxies';
import { map, catchError } from 'rxjs/operators';
import { CreateProductionDto } from './create-production-dto';

@Injectable()
export class ProductionsService {

  productions: ProductionDto[] = [];
  productionsList: PagedResultDtoOfProductionDto = null;

  constructor(
    private _productionServiceProxy: ProductionServiceProxy) {
  }

  get(id: number): Observable<ProductionDto> {
    return this._productionServiceProxy.get(id);
  }

  create(): Observable<ProductionDto> {
    return this._productionServiceProxy.create(new CreateProductionDto());
  }

  update(input: ProductionDto | null | undefined): Observable<ProductionDto> {
    return this._productionServiceProxy.update(<ProductionDto>input);
  }

  getAll(skipCount: number = 0, maxResultCount: number = 100, refresh: boolean = false): Observable<PagedResultDtoOfProductionDto> {
    if (this.productionsList && !refresh) {
      return of(this.productionsList);
    }

    return this._productionServiceProxy.getAll(skipCount, maxResultCount)
      .pipe(
        map(data => {
          if (data) {
            this.productionsList = data;
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

  getDetails(id: number){
    return this._productionServiceProxy.getDetails(id);
  }

  delete(id: number): Observable<void> {
    return this._productionServiceProxy.delete(id);
  }

  getInventory(): Observable<InventoryItemDto[]> {
    return this._productionServiceProxy.getInventory();
  }

  registerStep1(productionId: number) {
    return this._productionServiceProxy.registerStep1(productionId);
  }

  registerStep2(productionId: number) {
    return this._productionServiceProxy.registerStep2(productionId);
  }

  complete(productionId: number) {
    return this._productionServiceProxy.completeProduction(productionId);
  }
}
