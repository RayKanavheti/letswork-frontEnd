import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    $.getScript('/assets/js/main.js', function() {});
    $.getScript('/assets/js/pages/auth.js', function() {});
    $.getScript('/assets/js/pages/landingv2.js', function() {});

}
}
