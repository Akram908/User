import { Component, OnInit } from '@angular/core';
import { mainContentAnimation } from '../animations';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    mainContentAnimation(),
  ]
})
export class LayoutComponent implements OnInit {
  sidebarState: string | undefined;

  constructor(
    private sidebarService: SidebarService,
  ) { }

  ngOnInit() {
    this.sidebarService.sidebarStateObservable$
      .subscribe((newState: string) => {
        this.sidebarState = newState;
      });
  }
}
