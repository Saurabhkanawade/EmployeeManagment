import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './dashboard/employees/employees.component';
import { HomeComponent } from './dashboard/home/home.component';
import { HomepageComponent } from './dashboard/homepage/homepage.component';
import { MeComponent } from './dashboard/me/me.component';
import { MyteamComponent } from './dashboard/myteam/myteam.component';
import { LoginComponent } from './dashboard/login/login.component';

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', redirectTo:'dashboard',pathMatch:'full' },
      { path: 'employees', component: EmployeesComponent },
      { path: 'me', component: MeComponent },
      { path: 'myteam', component: MyteamComponent },
      { path: 'dashboard', component:HomepageComponent}
  ],
  },

  { path:'', redirectTo:'home' , pathMatch:"full"},
  { path:'**',redirectTo:'home', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
