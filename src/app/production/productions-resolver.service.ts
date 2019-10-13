import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { PagedResultDtoOfProductionDto } from '@shared/service-proxies/service-proxies';
import { ProductionsService } from './productions.service';

@Injectable()
export class ProductionsResolverService implements Resolve<PagedResultDtoOfProductionDto> {

  constructor(
    private _service: ProductionsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : PagedResultDtoOfProductionDto | Observable<PagedResultDtoOfProductionDto> {
    return this._service.getAll();
  }
}
