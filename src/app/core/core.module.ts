import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeModule } from '../welcome/welcome.module';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from '../authentication/auth.service';
import { ActivateComponent } from './activate/activate.component';



@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    WelcomeModule
  ],
  declarations: [LayoutComponent, LoginComponent, RegisterComponent, ActivateComponent],
  providers: [AuthService]
})
export class CoreModule { }
