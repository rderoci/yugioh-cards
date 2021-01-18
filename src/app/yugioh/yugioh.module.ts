import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YugiohRoutingModule } from './yugioh-routing.module';
import { YugiohDetailComponent } from './components/yugioh-detail/yugioh-detail.component';
import { YugiohListComponent } from './components/yugioh-list/yugioh-list.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [YugiohDetailComponent, YugiohListComponent, AboutComponent],
  imports: [
    CommonModule,
    YugiohRoutingModule
  ]
})
export class YugiohModule { }
