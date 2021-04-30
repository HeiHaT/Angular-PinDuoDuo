import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendRoutingModule } from './recommend-routing.module';
import { RecommendContainerComponent } from './components';


@NgModule({
  declarations: [RecommendContainerComponent],
  imports: [
    CommonModule,
    RecommendRoutingModule
  ]
})
export class RecommendModule { }
