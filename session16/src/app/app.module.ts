import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecycleComponent } from './playground/lifecycle/lifecycle.component';
import { TemplateformComponent } from './playground/templateform/templateform.component';
import { AddComponent } from './doctors/add/add.component';
@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    TemplateformComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
