import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage/manage.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AddProjectComponent } from './add-project/add-project.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ProjectsComponent } from './projects/projects.component';
import { OpenProjectsComponent } from './my-projects/open-projects/open-projects.component';
import { WorkInProgressComponent } from './my-projects/work-in-progress/work-in-progress.component';
import { PastProjectsComponent } from './my-projects/past-projects/past-projects.component';
import { ViewProjectComponent } from './my-projects/view-project/view-project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

@NgModule({
  declarations: [ManageComponent, AddProjectComponent, MyProjectsComponent, OpenProjectsComponent,
    WorkInProgressComponent, PastProjectsComponent, ProjectDetailsComponent, ViewProjectComponent, ProjectsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [ProjectDetailsComponent]
})
export class DashboardModule { }
