import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { UsersComponent } from './users/users.component';
import { AddnewComponent } from './todo/addnew/addnew.component';
import { ShowallComponent } from './todo/showall/showall.component';
import { IndexComponent } from './todo/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    UsersComponent,
    AddnewComponent,
    ShowallComponent,
    IndexComponent
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
