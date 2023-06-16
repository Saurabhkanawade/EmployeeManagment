import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MeComponent } from './me/me.component';
import { MyteamComponent } from './myteam/myteam.component';
import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [
    HomeComponent,
    EmployeesComponent,
    SidebarComponent,
    MeComponent,
    MyteamComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class DashboardModule { }
