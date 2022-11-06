import { Component, OnInit, Input, EventEmitter } from '@angular/core';

export interface navItemChild{
  title: string,
  icon: string,
  link: string | undefined,
}

export interface navItem{
  title: string,
  icon: string,
  link: string | undefined,
  expanded: boolean,
  children: navItemChild[]
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  @Input() public navItemsList: navItem[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  public getExpanded = (nav_item: any): boolean => {
    return nav_item.expanded;
  }

}
