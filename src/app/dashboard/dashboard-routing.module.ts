import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ManageComponent } from './manage/manage.component';
import { AddProjectComponent } from './add-project/add-project.component';

const routes: Routes = [
    { path: '', redirectTo: 'manage', pathMatch: 'full' },
    { path: 'manage', component: ManageComponent },
    {path: 'add-project', component: AddProjectComponent}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }
