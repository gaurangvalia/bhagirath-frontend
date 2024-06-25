import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpCommonService } from '../../core/services/http-common.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Users } from '../../core/model/common.model';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class UsersService {
  basedUrl: string = environment.serverUrl;
  public bSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public showUsers$ = this.bSubject.asObservable();
  constructor(private http: HttpCommonService) {}

  getUserDetails(): Observable<any> {
    return this.showUsers$;
  }
  
  setUserDetails(value: any) {
    return this.bSubject.next(value);
  }

  addUsers(userDetails: any): Observable<any> {
    return this.http.httpPostRequest(
      `${this.basedUrl}/user`,
      this.addUserData(userDetails)
    );
  }
  editUsers(userDetails: any): Observable<any> {
    return this.http.httpPostRequest(
      `${this.basedUrl}/user`,
      this.updateUserData(userDetails)
    );
  }

  getAllUsers(userGroupId:any): Observable<any> {
    return this.http.httpGetRequest(`${this.basedUrl}/user/list/${userGroupId}`);
  }

  getUserById(id: any): Observable<any> {
    return this.http.httpGetRequest(`${this.basedUrl}/user/${id}`);
  }

  deleteUser(id: any): Observable<any> {
    return this.http.httpDeleteRequest(`${this.basedUrl}/user/${id}`);
  }

  addUserData(details: any): Users {
    return {
      fullName: details.fullName,
      contactNo: details.contactNo,
      address: details.address,
      userGroup: details.userGroup.value,
      role: details.role.value,
      email: details.email,
      password: details.password,
      isActive: details.isActive,
      markup: details.markup,
      createdBy: details.createdBy,
    };
  }

  updateUserData(details: any): Users {
    return {
      id: details.id,
      fullName: details.fullName,
      contactNo: details.contactNo,
      address: details.address,
      userGroup: details.userGroup.value,
      role: details.role.value,
      email: details.email,
      password: details.password,
      isActive: details.isActive,
      markup: details.markup,
      updatedBy: details.updatedBy,
    };
  }
}
