import { NgModule } from '@angular/core';

import { RecommendRoutingModule } from './recommend-routing.module';
import { RecommendContainerComponent } from './components';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [RecommendContainerComponent],
  imports: [
    RecommendRoutingModule,
    SharedModule
  ]
})
export class RecommendModule { }
