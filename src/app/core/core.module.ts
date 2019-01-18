import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeModule } from '../welcome/welcome.module';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    WelcomeModule
  ],
  declarations: [LayoutComponent]
})
export class CoreModule { }
