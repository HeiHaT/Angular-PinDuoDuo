import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent } from '.';


@NgModule({
  declarations: [
    HomeContainerComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    HomeContainerComponent
  ]
})
export class HomeModule { }
