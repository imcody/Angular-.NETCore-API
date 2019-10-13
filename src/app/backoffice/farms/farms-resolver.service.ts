import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { PagedResultDtoOfFarmDto } from '@shared/service-proxies/service-proxies';
import { FarmsService } from './farms.service';

@Injectable()
export class FarmsResolverService implements Resolve<PagedResultDtoOfFarmDto> {

  constructor(
    private _service: FarmsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : PagedResultDtoOfFarmDto | Observable<PagedResultDtoOfFarmDto> {
    return this._service.getAll();
  }
}
