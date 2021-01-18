import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './core/containers/layout/layout.component';


const routes: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: 'layout'},
  // {path: 'layout', component: LayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
