import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ProjectaddComponent } from './components/projectadd/projectadd.component';


@NgModule({
  declarations: [ProjectaddComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [ProjectaddComponent]
})
export class SharedModule { }
