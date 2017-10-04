import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { DemoComponent } from './components/demo/demo.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { Comp3Component } from './components/comp3/comp3.component';
import { UserListComponent } from './user-list/user-list.component';
import { Comp4Component } from './components/comp4/comp4.component';
import { HttpModule } from '@angular/http';
import { UserList2Component } from './user-list2/user-list2.component';
import { UserList3Component } from './user-list3/user-list3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DemoComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    UserListComponent,
    Comp4Component,
    UserList2Component,
    UserList3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
