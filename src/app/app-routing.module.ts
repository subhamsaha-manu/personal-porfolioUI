import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path :'dashboard', component : DashboardComponent},
  {path :'resume', component : ResumeComponent},
  {path :'contact',component:ContactComponent},
  {path :'',redirectTo:'/dashboard',pathMatch:'full'},
  {path :'**',redirectTo:'/dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
