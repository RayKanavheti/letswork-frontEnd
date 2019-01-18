import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from '../welcome/hello/hello.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
    { path: '', component: HelloComponent },
    {path: '', component: LayoutComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class CoreRoutingModule { }
