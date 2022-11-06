import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  portal_url_list: any[] = [
    {
      "title": "Accounts",
      "icon": "group",
      "link": "",
      "expanded": true,
      "children": [
        {
          "title": "SubAgents",
          "icon": "person 4",
          "link": "/portal/sub-agents",
        },
        {
          "title": "Tenants",
          "icon": "person 4",
          "link": "/portal/sub-agents",
        }
      ]
    },
    {
      "title": "Products",
      "icon": "inventory 2",
      "expanded": false,
      "link": "",
      "children": [
        {
          "title": "Products",
          "icon": "inventory",
          "link": "/portal/products"
        },
        {
          "title": "Categories",
          "icon": "category",
          "link": "/portal/products/categories"
        },
        {
          "title": "Insurance Type",
          "icon": "radar",
          "link": "/portal/products/insurance-type"
        },
        {
          "title": "Banefits",
          "icon": "hail",
          "link": "/portal/products/benefits"
        },
        {
          "title": "Product Categories",
          "icon": "category",
          "link": "/portal/products/product-category"
        }
      ]
    },
    {
      "title": "Policies",
      "icon": "paid",
      "expanded": false,
      "link": "",
      "children": [
        {
          "title": "Policies",
          "icon": "description",
          "link": "/portal/policies"
        },
        {
          "title": "Payments",
          "icon": "tram",
          "link": "/portal/providers/product-providers"
        }
      ]
    },
    {
      "title": "Providers",
      "icon": "paid",
      "expanded": false,
      "link": "",
      "children": [
        {
          "title": "Providers",
          "icon": "paragliding",
          "link": "/portal/providers"
        },
        {
          "title": "Product Providers",
          "icon": "tram",
          "link": "/portal/providers/product-providers"
        }
      ]
    },
    {
      "title": "Motor Costing",
      "icon": "paid",
      "expanded": false,
      "link": "",
      "children": [
        {
          "title": "Comprehensive Costings",
          "icon": "subway",
          "link": "/portal/motor-costing/comprehesive"
        },
        {
          "title": "ThirdParty Costings",
          "icon": "tram",
          "link": "/portal/motor-costing/third-party"
        }
      ]
    }
  ]

  toggle: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  public toggleSidebar = (): void => {
    if (this.toggle) {
      this.toggle = false
    } else {
      this.toggle = true
    }
  }


}
