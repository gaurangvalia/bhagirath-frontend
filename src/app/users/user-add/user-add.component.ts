import { Component } from '@angular/core';
import { OverlayInputConfig } from '../../shared/components/overlay/overlay.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminGroupList, roleList, userGroupList } from '../../core/model/common.model';
import { UsersService } from '../../shared/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.scss',
})
export class UserAddComponent {
  /** provides the configuration for All the inputs. */
  public inputConfig!: OverlayInputConfig;
  public userGroupsData: any = AdminGroupList;
  public roleDetails: any = roleList;
  public roleLists: any = [];
  public isBuilder: boolean = false;
  public userFormGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private routing: Router,
    private usersService: UsersService
  ) {
    this.userFormGroup = this.fb.group({
      email: [''],
      password: [''],
      fullName: [''],
      contactNo: [''],
      userGroup: [''],
      role: [''],
      markup: [''],
      address:['']
    });
    this.inputConfig = {
      title: 'Add APIs Details',
      isSubmitEnable: true,
      isFormTouched: false,
    };
    
  }

  changeUserGroup(selectedValue: any) {
    this.roleLists = [];
    this.isBuilder = selectedValue.value === 2 ? true : false;
    this.userFormGroup.get('role')?.setValue('');
    this.roleLists = this.roleDetails.find(
      (el: any) => el.userGroupType === selectedValue.value
    ).roles;
  }

  onCancel() {
    this.usersService.setUserDetails(true);
    this.routing.navigate(['../apis']);
  }

  onSubmit() {
    this.usersService.addUsers(this.userFormGroup.value).subscribe((res) => {
      this.routing.navigate(['../apis']);
      this.usersService.setUserDetails(true);
    });
  }
}
