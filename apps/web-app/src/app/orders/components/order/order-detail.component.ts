import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Order, Product } from '../../models/orders';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent {
  @Input() loading: boolean;
  @Input() set data(data: Order[]) {
    if(data?.length){
      this.order=data.find(()=>true)

    }
  }

 order:Order;


}
