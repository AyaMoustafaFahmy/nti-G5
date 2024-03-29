import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivateuserComponent } from './pages/activateuser/activateuser.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'activate/:id', component:ActivateuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
