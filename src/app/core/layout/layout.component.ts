import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    $.getScript('/assets/js/datepicker/datepicker.min.js', function () { });
    $.getScript('/assets/js/wickedpicker/wickedpicker.min.js', function () { });
    $.getScript('/assets/js/chosen/chosen.jquery.min.js', function () { });
    $.getScript('/assets/js/common.js', function () { });
    $.getScript('/assets/js/pages/dashboard.js', function () { });
    $.getScript('/assets/js/pages/components-modals.js', function () { });
    $.getScript('/assets/js/pages/components-quickview.js', function () { });
  }

}
