import { Component } from '@angular/core';

import { HomeFacade } from '../../home.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private homeFacade: HomeFacade) { }

  logOut(): void {
    this.homeFacade.logOut();
  }

}
