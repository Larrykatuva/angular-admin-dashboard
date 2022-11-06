import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output()public toggleSidebar = new EventEmitter();

  hidden: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public clickMenu = (): void => {
    this.toggleSidebar.emit()
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }


}
