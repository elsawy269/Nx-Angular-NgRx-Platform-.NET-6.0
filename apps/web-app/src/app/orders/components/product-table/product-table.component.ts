import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Order, Product } from '../../models/orders';


@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent implements OnInit {
  @Input() set products(products: Product[]) {
      this.dataSource.data = products;
  }

  dataSource = new MatTableDataSource<Product>([]);
  displayedColumns = [];
  search  ='';
  order:Order;

  ngOnInit() {
    this.displayedColumns = [
      'name',
      'code',
      'quantity',
      'total',
      'actions'
    ];
  }
}
