import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
// import { SharedModule } from '../shared';
import {
  ProductContainerComponent,
  GroupItemComponent,
  GroupShortListComponent,
  PaymentComponent,
  ConfirmOrderComponent,
  ProductAmountComponent
} from './components';
import { SharedModule } from '../shared/shared.module';
import { ProductVariantDialogComponent } from './components/product-variant-dialog';

@NgModule({
  declarations: [
    ProductContainerComponent,
    GroupItemComponent,
    GroupShortListComponent,
    ProductVariantDialogComponent,
    ProductAmountComponent,
    PaymentComponent,
    ConfirmOrderComponent
  ],
  imports: [SharedModule, ProductRoutingModule],
  entryComponents: [ProductVariantDialogComponent]
})
export class ProductModule {}
