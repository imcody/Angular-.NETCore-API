import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { PagedResultDtoOfLeatherDto } from '@shared/service-proxies/service-proxies';
import { LeathersService } from './leathers.service';

@Injectable()
export class LeathersResolverService implements Resolve<PagedResultDtoOfLeatherDto> {

  constructor(
    private _service: LeathersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : PagedResultDtoOfLeatherDto | Observable<PagedResultDtoOfLeatherDto> {
    return this._service.getAll();
  }
}
