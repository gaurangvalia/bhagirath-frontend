export class RequestLoginDetails {
  public email!: string;
  public password!: string;
}

export const userGroupList = [
  {
    label: 'Builders',
    value: 2,
  },
  {
    label: 'Renovator',
    value: 3,
  },
  {
    label: 'Home Owner',
    value: 4,
  },
];
export const AdminGroupList = [
  {
    label: 'Admin',
    value: 1,
  },
];

export const roleList = [
  {
    userGroupType: 1,
    roles: [
      {
        label: 'Self',
        value: 1,
      },
      {
        label: 'Staff',
        value: 2,
      },
      {
        label: 'Sale Person',
        value: 3,
      },
    ],
  },
  {
    userGroupType: 2,
    roles: [
      {
        label: 'Self',
        value: 1,
      },
      {
        label: 'Contact Person',
        value: 2,
      },
    ],
  },
  {
    userGroupType: 3,
    roles: [
      {
        label: 'Renovator',
        value: 1,
      },
    ],
  },
  {
    userGroupType: 4,
    roles: [
      {
        label: 'Home Owner',
        value: 1,
      },
    ],
  },
];

export class Users {
  public id?: string;
  public email!: string;
  public password!: string;
  public fullName!: string;
  public contactNo!: string;
  public userGroup!: string;
  public role!: string;
  public markup!: string;
  public address!: string;
  public isActive?: string;
  public createdBy?: string;
  public updatedBy?: string;
}

export enum Roles {
  Admin = 1,
  Sales_Person = 5,
  Purchasing = 6,
  Accounting = 7,
  Service = 8,
  Production_supervisior = 9,
  Home_Owner =  4,
  Renovator = 3,
  Builders = 2,
}

export const RoleDetailsList = [
  {
    role:Roles.Admin,
    actions:[
      {
        module_name: 'dashboard',
        create_action: true,
        read_action: true,
        update_action: true,
        delete_action: true,
      },
      {
        module_name: 'users',
        create_action: true,
        read_action: true,
        update_action: true,
        delete_action: true,
      },
      {
        module_name: 'quotations',
        create_action: true,
        read_action: true,
        update_action: true,
        delete_action: true,
      },
      {
        module_name: 'inventory',
        create_action: true,
        read_action: true,
        update_action: true,
        delete_action: true,
      },
      {
        module_name: 'customer',
        create_action: true,
        read_action: true,
        update_action: true,
        delete_action: true,
      },
      {
        module_name: 'products',
        create_action: true,
        read_action: true,
        update_action: true,
        delete_action: true,
      },
    ]
  }
  
];
