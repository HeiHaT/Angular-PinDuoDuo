import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ImageSliderComponent,
    ScrollableTabComponent,
    HorizontalGridComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
} from './components';

//
import {
  GridItemDirective,
  GridItemImageDirective,
  GridItemTitleDirective
 } from './directives';

import { AgoPipe } from './pipes';


@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    AgoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    FooterComponent,
    ProductCardComponent,
    VerticalGridComponent,
    AgoPipe
  ]
})
export class SharedModule { }
