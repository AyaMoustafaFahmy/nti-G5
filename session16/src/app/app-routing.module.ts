import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { AddComponent } from './doctors/add/add.component';
import { LifecycleComponent } from './playground/lifecycle/lifecycle.component';
import { TemplateformComponent } from './playground/templateform/templateform.component';
import { RegisterComponent } from './social/user/register/register.component';

const routes: Routes = [
  {path:'play', component:LifecycleComponent},
  {path:'tempForm', component:TemplateformComponent},
  {path:'addDoctor', component:AddComponent},
  {path:'register', component:RegisterComponent},
  {path:'all', component:AllComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
