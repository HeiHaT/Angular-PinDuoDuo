import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ImageSliderComponent,
    ScrollableTabComponent,
    HorizontalGridComponent,
    FooterComponent,
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
    AgoPipe
  ]
})
export class SharedModule { }
