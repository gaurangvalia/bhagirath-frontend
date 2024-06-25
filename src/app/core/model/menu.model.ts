export class Menus{
    id!: number;
    menuTitle!:string;
    menuLink!:string;
    roles:any;
    active!:boolean;
    subMenu!: Menus[];
    iconClass!:string;
}