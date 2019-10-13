import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { PagedResultDtoOfUserDto } from '@shared/service-proxies/service-proxies';
import { UsersService } from './users.service';

@Injectable()
export class UsersResolverService implements Resolve<PagedResultDtoOfUserDto> {

  constructor(
    private _service: UsersService,
    private _router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : PagedResultDtoOfUserDto | Observable<PagedResultDtoOfUserDto> {
    return this._service.getAll();
  }
}
