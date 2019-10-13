import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { PagedResultDtoOfInventoryDto } from '@shared/service-proxies/service-proxies';
import { InventoryService } from './inventory.service';

@Injectable()
export class InventoryResolverService implements Resolve<PagedResultDtoOfInventoryDto> {

  constructor(
    private _service: InventoryService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : PagedResultDtoOfInventoryDto | Observable<PagedResultDtoOfInventoryDto> {
    return this._service.getAll();
  }
}
