import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MyContainerComponent } from './components';
import { MyRoutingModule } from './my-routing.module';



@NgModule({
  declarations: [ MyContainerComponent ],
  imports: [
    SharedModule,
    MyRoutingModule
  ]
})


export class MyModule { }
