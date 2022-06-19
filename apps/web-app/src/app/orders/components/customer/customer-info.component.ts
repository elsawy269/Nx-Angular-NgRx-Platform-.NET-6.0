import { Component, Input } from '@angular/core';
import { Customer } from '../../models/orders';


@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss'],
})
export class CustomerComponent  {
  @Input() customer: Customer;

}
