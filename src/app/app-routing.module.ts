import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio/portfolio.component';

const routes: Routes = [
  {path:'portfolio',component: PortfolioComponent},
  {path:'login',component:LoginComponent},
  {path:'**',redirectTo:'portfolio',pathMatch:'full'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
