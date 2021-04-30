import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendRoutingModule } from './recommend-routing.module';
import { RecommendContainerComponent } from './components';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [RecommendContainerComponent],
  imports: [
    CommonModule,
    RecommendRoutingModule,
    SharedModule
  ]
})
export class RecommendModule { }
