import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
    { path: '', redirectTo: 'manage', pathMatch: 'full' },
    { path: 'manage', component: ManageComponent },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }
