import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './containers/layout/layout.component';
import {YugiohListComponent} from '../yugioh/components/yugioh-list/yugioh-list.component';
import {AboutComponent} from '../yugioh/components/about/about.component';


const routes: Routes = [
  {path: 'list', component: YugiohListComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
