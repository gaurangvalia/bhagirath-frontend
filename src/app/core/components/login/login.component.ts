import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toasterService: ToastrService,
    private route: ActivatedRoute,
    private routing: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  login() {
    if (this.loginForm.valid) {
      this.authService.loginUsers(this.loginForm.value).subscribe((ele) => {
        this.authService.setUserDetails(ele.body)
        this.routing.navigate(['dashboard'])
      });
    }
  }
}
