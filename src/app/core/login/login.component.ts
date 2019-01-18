import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    $.getScript('/assets/js/main.js', function() {});
    $.getScript('/assets/js/pages/auth.js', function() {});
    $.getScript('/assets/js/pages/landingv2.js', function() {});
}

Login() {
  this.router.navigateByUrl('/dashboard/manage');
}

}
