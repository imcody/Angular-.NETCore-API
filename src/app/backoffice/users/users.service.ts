import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  UserServiceProxy,
  UserDto,
  ListResultDtoOfRoleDto,
  PagedResultDtoOfUserDto,
  CreateUserDto,
  FarmInfoDto
} from '@shared/service-proxies/service-proxies';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class UsersService {

  users: UserDto[] = [];
  usersList: PagedResultDtoOfUserDto = null;

  constructor(
    private _userServiceProxy: UserServiceProxy) {
  }

  get(id: number): Observable<UserDto> {
    return this._userServiceProxy.get(id);
  }

  edit(input: CreateUserDto | UserDto | null | undefined): Observable<UserDto> {
    console.log(input)
    if (input instanceof CreateUserDto) {
      return this._userServiceProxy.create(input);
    } else {
      return this._userServiceProxy.update(input);
    }
  }

  getAll(skipCount: number = 0, maxResultCount: number = 100, refresh: boolean = false): Observable<PagedResultDtoOfUserDto> {
    if (this.usersList && !refresh) {
      return of(this.usersList);
    }

    return this._userServiceProxy.getAll(skipCount, maxResultCount)
      .pipe(
        map(data => {
          if (data) {
            this.usersList = data;
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
    return this._userServiceProxy.delete(id);
  }

  getRoles(): Observable<ListResultDtoOfRoleDto> {
    return this._userServiceProxy.getRoles();
  }

  farmsCache = null;
  cacheTimeout = 60 * 1000;
  getFarms(): Observable<FarmInfoDto[]> {
    if (this.farmsCache != null) {
      return of(this.farmsCache);
    }
    else {
      return this._userServiceProxy.getFarms()
        .pipe(tap(x => {
          this.farmsCache = x;
          setTimeout(() => {
            this.farmsCache = null;
          }, this.cacheTimeout);
        }));
    }
  }
}
