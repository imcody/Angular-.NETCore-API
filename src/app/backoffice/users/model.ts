import { Injector, OnInit } from '@angular/core';
import { UserDto, CreateUserDto } from '@shared/service-proxies/service-proxies';
import { EditEntityComponentBase } from '../models';
import { UsersService } from './users.service';

export abstract class EditUserComponentBase extends EditEntityComponentBase implements OnInit {

    service: UsersService;
    user: CreateUserDto | UserDto = null;

    constructor(
        injector: Injector) {
        super(injector);
        this.service = injector.get(UsersService);
    }

    ngOnInit(): void {
    }
}
