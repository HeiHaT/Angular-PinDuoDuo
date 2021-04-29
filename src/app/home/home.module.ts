import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeAuxComponent, HomeContainerComponent, HomeDetailComponent, HomeGrandComponent } from './components';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    HomeAuxComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
