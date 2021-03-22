import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecycleComponent } from './playground/lifecycle/lifecycle.component';
import { TemplateformComponent } from './playground/templateform/templateform.component';
import { AddComponent } from './doctors/add/add.component';
import { RegisterComponent } from './social/user/register/register.component';
import { AllComponent } from './all/all.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    TemplateformComponent,
    AddComponent,
    RegisterComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
