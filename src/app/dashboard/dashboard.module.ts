import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage/manage.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AddProjectComponent } from './add-project/add-project.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyProjectsComponent } from './my-projects/my-projects.component';

@NgModule({
  declarations: [ManageComponent, AddProjectComponent, MyProjectsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
