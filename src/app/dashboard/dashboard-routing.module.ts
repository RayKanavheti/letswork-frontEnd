import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ManageComponent } from './manage/manage.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';

const routes: Routes = [
    { path: '', redirectTo: 'manage', pathMatch: 'full' },
    { path: 'manage', component: ManageComponent },
    { path: 'add-project', component: AddProjectComponent },
    { path: 'my-projects', component: MyProjectsComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
