import { Component, Input } from '@angular/core';
import { Order } from '../../models/orders';


@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.scss'],
})
export class BillingDetailsComponent  {
  @Input() order: Order;

}
