import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './doctors/add/add.component';
import { LifecycleComponent } from './playground/lifecycle/lifecycle.component';
import { TemplateformComponent } from './playground/templateform/templateform.component';

const routes: Routes = [
  {path:'play', component:LifecycleComponent},
  {path:'tempForm', component:TemplateformComponent},
  {path:'addDoctor', component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
