import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Err404Component } from './err404/err404.component';
import { ReactiveComponent } from './playground/reactive/reactive.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

const routes: Routes = [
  {path:'', redirectTo:'reactive', pathMatch:'full'},
  {path:'reactive', 
    children:[
      {path:'', component:ReactiveComponent, pathMatch:'full'},
      {path:'test1',component:Test1Component},
      {path:'test2', component:Test2Component},
    ]
  },
  {path:'x/:id',component:Test1Component},
  {path:'**', component:Err404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
