import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.getScript('/assets/js/main.js', function() {});
    $.getScript('/assets/js/pages/auth.js', function() {});
    $.getScript('/assets/js/pages/landingv2.js', function() {});
  }

}
