import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage/manage.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AddProjectComponent } from './add-project/add-project.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { OpenProjectsComponent } from './open-projects/open-projects.component';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';
import { PastProjectsComponent } from './past-projects/past-projects.component';
import { ViewProjectComponent } from './view-project/view-project.component';

@NgModule({
  declarations: [ManageComponent, AddProjectComponent, MyProjectsComponent, OpenProjectsComponent,
    WorkInProgressComponent, PastProjectsComponent, ViewProjectComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
