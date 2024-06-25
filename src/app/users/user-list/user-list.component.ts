import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../shared/services/users.service';
import { AdminGroupList, Users, roleList, userGroupList } from '../../core/model/common.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  @HostBinding('class') public classes: string =
    'd-flex flex-column h-100 overflow-hidden';
  public userList: Users[] | any = [];
  public userGroupsData: any = AdminGroupList;
  public roleDetails: any = roleList;
  searchText: string = '';
  constructor(
    private route: ActivatedRoute,
    private routing: Router,
    private usersService: UsersService
  ) {
    this.usersService.getUserDetails().subscribe((el) => {
      this.getAll();
    });
    this.getAll();
  }
  
  getAll() {
    this.roleDetails[0].userGroupType
    this.usersService.getAllUsers(this.roleDetails[0].userGroupType).subscribe((res: any) => {
      this.userList = [];
      let data = res?.body.map((el: any) => {
        let findUser = this.userGroupsData.find(
          (item: any) => item.value === el.userGroup
        );
        el.userGroup = findUser?.label;
        let findRole = this.roleDetails.find(
          (item: any) => item.userGroupType === findUser?.value
        );
        let findRoleItems = findRole?.roles.find(
          (itemOfRole: any) => itemOfRole.value === el.role
        );
        el.role = findRoleItems?.label;
        this.userList.push(el);
      });
    });
  }

  edit(value: any) {
    this.routing.navigate(['users/edit', value]);
  }

  delete(value: any) {
    this.usersService.deleteUser(value).subscribe((res: Users) => {
      this.getAll();
    });
  }
}
