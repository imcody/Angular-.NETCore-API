import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AppAuthService } from '@app/shared/auth/app-auth.service';
import { AppSessionService } from '../session/app-session.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {

  @Output() toggleSidebar = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};
  appSession: AppSessionService;
  constructor(
    private _authService: AppAuthService,
    appSession: AppSessionService) {
    this.appSession = appSession;
  }

  ngAfterViewInit() {
  }

  logout(): void {
    this._authService.logout();
  }
}