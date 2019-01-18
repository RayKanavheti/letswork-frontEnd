import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    $.getScript('/assets/js/main.js', function() {});
    $.getScript('/assets/js/pages/auth.js', function() {});
    $.getScript('/assets/js/pages/landingv2.js', function() {});

}
}
