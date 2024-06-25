import { Injectable } from '@angular/core';
import { RequestLoginDetails } from '../model/common.model';
import { environment } from '../../../environments/environment';
import { HttpCommonService } from './http-common.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUserRole: any = 3;
  userDetails: any;
  basedUrl: string = environment.serverUrl;
  constructor(private http: HttpCommonService, private routing: Router) {}

  loginUsers(loginDetails: RequestLoginDetails): Observable<any> {
    return this.http.httpPostRequest(
      // `${this.basedUrl}/account/login`,
      `${this.basedUrl}/account/login`,
      loginDetails
    );
  }
  logout(): void {
    localStorage.setItem('loggedIn', 'false');
    localStorage.removeItem('userDetails');
    this.routing.navigate(['login']);
  }

  setUserDetails(userDetails: any) {
    this.userDetails = userDetails;
    localStorage.setItem('loggedIn', 'true');
    this.setUserRole(this.userDetails.role)
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
  }
  getAuthorizationHeaderValue() {
    // let user = JSON.parse(localStorage.getItem('userDetails') || '');
    return this.userDetails?.accessToken;
    // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjViYmFiOWJjLTc4ZjgtNDZlYy1iZjFjLWYyNmI5Njg4ZDM1YiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFkbWluIiwiVXNlcklkIjoiNWJiYWI5YmMtNzhmOC00NmVjLWJmMWMtZjI2Yjk2ODhkMzViIiwiRnVsbE5hbWUiOiJBZG1pbiIsIkVtYWlsIjoiYWRtaW4iLCJDb250YWN0Tm8iOiI5OTk5OTk5OTk5IiwiVXNlclJvbGUiOiIxIiwiZXhwIjoxNzEwMDkyMDcwLCJpc3MiOiJBdXRoZW50aWNhdGlvblRva2VuR2VuZXJhdGlvbiIsImF1ZCI6IkF1dGhlbnRpY2F0aW9uVG9rZW5HZW5lcmF0aW9uIn0.Gi6cjp2vkqBp1TbBexVWsPT-LoU3vJwp-el77AwjfzQ'
  }

  getUserDetails() {
    return JSON.parse(localStorage.getItem('userDetails') || '');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }
  setUserRole(role: string) {
    // let userDetails=JSON.parse(localStorage.getItem('userDetails') || '');
    this.currentUserRole = 1;
  }
  
  hasAnyRequiredRole(roles: string[]): boolean {
    console.log('role',this.currentUserRole);
    console.log('con',roles.includes(this.currentUserRole));
    
    return roles.includes(this.currentUserRole);
  }

  getAccessControls() {
    return [
      {
        module_name: 'users',
        create_action: false,
        read_action: true,
        update_action: true,
        delete_action: false,
      },
      {
        module_name: 'customer',
        create_action: true,
        read_action: true,
        update_action: false,
        delete_action: false,
      },
    ];
  }
}
