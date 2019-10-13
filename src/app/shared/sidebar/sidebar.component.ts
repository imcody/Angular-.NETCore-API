import { Component, AfterViewInit, OnInit, Injector } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { AppAuthService } from '@app/shared/auth/app-auth.service';
import { AppComponentBase } from '../app-component-base';
declare var $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent extends AppComponentBase implements OnInit {

  showMenu = '';
  showSubMenu = '';
  public sidebarnavItems: any[];

  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
  }

  constructor(
    private injector: Injector,
    private _authService: AppAuthService, ) {
      super(injector)
  }

  ngOnInit() {
    this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);
  }

  logout(): void {
    this._authService.logout();
  }

}
