import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ImageSliderComponent,
    ScrollableTabComponent,
    HorizontalGridComponent
} from './components';


@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent
  ],
  imports: [
    CommonModule
    // FormsModule
  ],
  exports: [
    CommonModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent
  ]
})
export class SharedModule { }
