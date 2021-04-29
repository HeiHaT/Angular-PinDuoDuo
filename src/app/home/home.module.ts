import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ChildComponent, HomeAuxComponent, HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, ParentComponent } from './components';
import { HomeRoutingModule } from './home-routing.module';
import { HomeService, token } from './services';


@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    HomeAuxComponent,
    ParentComponent,
    ChildComponent
  ],
  providers: [
     {
      provide: token,
      useValue: 'server 传入的'
    }
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
