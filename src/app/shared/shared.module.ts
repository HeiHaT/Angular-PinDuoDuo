import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ImageSliderComponent,
    ScrollableTabComponent,
    HorizontalGridComponent,
} from './components';

//
import {
  GridItemDirective,
  GridItemImageDirective,
  GridItemTitleDirective
 } from './directives';


@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective
  ],
  imports: [
    CommonModule
    // FormsModule
  ],
  exports: [
    CommonModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective
  ]
})
export class SharedModule { }
