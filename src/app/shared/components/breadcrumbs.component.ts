import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  @Input() currentRouteLabel: string;
  @Input() firstRouteUrl: string;
  @Input() firstRouteLabel: string;
  @Input() secondRouteUrl: string;
  @Input() secondRouteLabel: string;

  constructor() { }

  ngOnInit() {
  }

}
