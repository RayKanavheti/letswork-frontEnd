import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {
  activateQuickView = false;
  constructor() {

  }

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

  profileTrigger() {
    $('.main-menu-avatar, .dot').toggleClass('vanish');
    if ($('.js-hamburger').hasClass('is-active')) {
      $('.js-hamburger').removeClass('is-active');
      $('body').removeClass('is-fixed');
    } else {
      $('.js-hamburger').addClass('is-active');
      // wait 700ms before adding the fixed class to the body to prevent unpleasant effects
      setTimeout(function () {
        $('body').addClass('is-fixed');
      }, 700);
    }
  }
  quickViewClick() {

    this.activateQuickView = this.activateQuickView === false ? true : false;

  }

  quickViewClickClose() {
    this.activateQuickView = false;
  }

}
