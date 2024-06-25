import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Menus } from '../model/menu.model';
import { HttpCommonService } from './http-common.service';
import { environment } from '../../../environments/environment';
import { Roles } from '../model/common.model';

@Injectable()
export class CommonService {
  baseUrl: string = environment.serverUrl;
  constructor(private httpCommonService: HttpCommonService) {}

  getMenuList(): Observable<Menus[]> {
    return of(this.getMenuDetails());
    // return this.httpCommonService.httpGetRequest(`${this.baseUrl}/menus`);
  }

  getMenuDetails() {
    return [
      {
        id: 6,
        menuTitle: 'dashboard',
        menuLink: '/dashboard',
        roles: [
          Roles.Admin,
          Roles.Accounting,
          Roles.Renovator,
          Roles.Production_supervisior,
          Roles.Purchasing,
          Roles.Sales_Person,
          Roles.Service,
          Roles.Builders,
          Roles.Home_Owner,
        ],
        active: true,
        subMenu: [],
        iconClass: 'fi fi-rs-table-rows',
        headerTitle: 'Dashboard',
      },
      {
        id: 1,
        menuTitle: 'APIs',
        menuLink: '/apis',
        roles: [Roles.Admin],
        active: true,
        subMenu: [],
        iconClass: 'fi fi-tr-circle-user',
        headerTitle: 'APIs Details',
      },
      // {
      //   id: 2,
      //   menuTitle: 'Quotation',
      //   menuLink: '/quotation',
      //   roles: [
      //     Roles.Admin,
      //     Roles.Accounting,
      //     Roles.Renovator,
      //     Roles.Production_supervisior,
      //     Roles.Purchasing,
      //     Roles.Sales_Person,
      //     Roles.Service,
      //     Roles.Builders,
      //     Roles.Home_Owner,
      //   ],
      //   active: true,
      //   subMenu: [],
      //   iconClass: 'fi fi-rr-block-quote',
      //   headerTitle: 'Quotation Details',
      // },
      {
        id: 3,
        menuTitle: 'Customer',
        menuLink: '/customer',
        roles: [
          Roles.Admin,
          Roles.Accounting,
          Roles.Renovator,
          Roles.Purchasing,
          Roles.Sales_Person,
          Roles.Builders,
          Roles.Home_Owner,
        ],
        active: true,
        subMenu: [],
        iconClass: 'fi fi-tr-hr-person',
        headerTitle: 'Customer Details',
      },
      // {
      //   id: 4,
      //   menuTitle: 'Inventory',
      //   menuLink: '/inventory',
      //   roles: [
      //       Roles.Admin,
      //       Roles.Accounting,
      //       Roles.Production_supervisior,
      //       Roles.Purchasing,
      //     ],
      //   active: true,
      //   subMenu: [],
      //   iconClass: 'fi fi-tr-inventory-alt',
      //   headerTitle: 'Inventory Details',
      // },
      // {
      //   id: 5,
      //   menuTitle: 'Products',
      //   menuLink: '/products',
      //   roles: [
      //       Roles.Admin,
      //       Roles.Production_supervisior,
      //       Roles.Purchasing,
      //     ],
      //   active: true,
      //   subMenu: [],
      //   iconClass: 'fi fi-tr-box-open',
      //   headerTitle: 'Product Details',
      // },
    ];
  }
}
