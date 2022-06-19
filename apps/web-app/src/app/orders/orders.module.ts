import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';
import { MaterialModule } from '../shared/material';
import { BillingDetailsComponent } from './components/billing-details/billing-details.component';
import { CustomerComponent } from './components/customer/customer-info.component';
import { OrderDetailComponent } from './components/order/order-detail.component';
import { productTableHeaderComponent } from './components/product-table-header/product-table-header.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { FetchDataComponent } from './containers/fetch-data/fetch-data.component';
import { ForecastsGuard } from './guards/orders.guard';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: FetchDataComponent,
        canActivate: [ForecastsGuard],
      },
    ]),
  ],
  declarations: [FetchDataComponent,
    OrderDetailComponent,
    productTableHeaderComponent,
    CustomerComponent,
    BillingDetailsComponent,
    ProductTableComponent],
})
export class OrdersModule {}
