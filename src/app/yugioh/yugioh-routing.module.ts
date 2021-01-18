import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {YugiohListComponent} from './components/yugioh-list/yugioh-list.component';
import {YugiohDetailComponent} from './components/yugioh-detail/yugioh-detail.component';


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YugiohRoutingModule { }
