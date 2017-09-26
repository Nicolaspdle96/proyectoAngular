import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from "./components/demo/demo.component";
import { Comp1Component } from "./components/comp1/comp1.component";
import { Comp2Component } from "./components/comp2/comp2.component";
import { Comp3Component } from "./components/comp3/comp3.component";

const routes: Routes = [
 { path: 'demo', component: DemoComponent } ,
 { path: 'comp1', component: Comp1Component } ,
 { path: 'comp2', component: Comp2Component } ,
 { path: 'comp3', component: Comp3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
