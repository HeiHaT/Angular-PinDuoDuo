import { NgModule } from '@angular/core';
// import { GridItemDirective,
//    GridItemImageDirective,
//     GridItemTitleDirective,
//      HorizontalGridComponent,
//       ImageSliderComponent,
//        ScrollableTabComponent } from '../shared';

// import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent } from './components';


@NgModule({
  declarations: [
    HomeContainerComponent,
    // ImageSliderComponent,
    // ScrollableTabComponent,
    // HorizontalGridComponent,
    // GridItemDirective,
    // GridItemImageDirective,
    // GridItemTitleDirective,
  ],
  imports: [
    SharedModule,
  ]
})
export class HomeModule { }
