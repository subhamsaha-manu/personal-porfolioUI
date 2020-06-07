import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


const routes: Routes = [
  {path :'dashboard', component : DashboardComponent},
  {path :'resume', component : ResumeComponent},
  {path :'portfolio', component : PortfolioComponent},
  {path :'contact',component:ContactComponent},
  {path :'',redirectTo:'/dashboard',pathMatch:'full'},
  {path :'**',redirectTo:'/dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
