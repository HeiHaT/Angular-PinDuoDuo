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
import { TagDirective } from './directives/tag.directive';
import { AvatarDirective } from './directives/avatar.directive';
import { ProductRoutingModule } from '../product/product-routing.module';
import { ProductTileComponent } from './components/product-tile';


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
    ProductTileComponent,
    TagDirective,
    AvatarDirective,
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
    ProductTileComponent,
    VerticalGridComponent,
    TagDirective,
    AvatarDirective,
    AgoPipe
  ]
})
export class SharedModule { }
