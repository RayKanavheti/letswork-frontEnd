import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { IUser } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/authentication/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterViewInit {
  userForm: FormGroup;

  validateConfirmPassword(): void {
    setTimeout(() => this.userForm.controls.confirm.updateValueAndValidity());
  }
  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.userForm.controls.Password.value) {
      return { confirm: true, error: true };
    }
  }

  constructor(private fb: FormBuilder, private authSer: AuthService, private router: Router) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    $.getScript('/assets/js/main.js', function () { });
    $.getScript('/assets/js/pages/auth.js', function () { });
    $.getScript('/assets/js/pages/landingv2.js', function () { });

  }
  // Registration form for a user
  UserSignUpform(): void {
    this.userForm = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      confirm: ['', [this.confirmValidator]],
      phone: ['', [Validators.required]]
    });
  }

  submitForm($event: any, userInfo: IUser) {
    $event.preventDefault();
    console.log('User Object', userInfo);
    delete userInfo['confirm'];
    this.authSer.Register(userInfo)
      .subscribe(data => {

        console.log('response from the server', data);
      },
        error => {
          console.log('some error happened');
        });
  }
}
