import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MyContainerComponent } from './components';



@NgModule({
  declarations: [ MyContainerComponent ],
  imports: [
    SharedModule,
  ]
})


export class MyModule { }
