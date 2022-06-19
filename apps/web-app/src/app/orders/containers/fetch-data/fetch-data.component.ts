import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as coreActions from '../../../core/store/actions';
import * as fromRoot from '../../../core/store/reducers';
import { Order } from '../../models/orders';
import { OrderService } from '../../services/orders.service';

@Component({
  selector: 'app-fetch-data',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './fetch-data.component.html',
})
export class FetchDataComponent implements OnInit {
  order$: Observable<Order[]>;
  count$: Observable<number>;
  loading$: Observable<boolean>;
  error$: Observable<HttpErrorResponse | any>;
  title$: Observable<string>;
  constructor(
    private store: Store<fromRoot.State>,
    private orderService: OrderService,
  ) {
    this.getOrder();
  }

  ngOnInit() {
    this.store.dispatch(coreActions.setTitle({ title: 'Order Detail' }));
    this.title$ = this.store.pipe(select(fromRoot.getTitle));
    this.order$ = this.orderService.entities$;
    this.count$ = this.orderService.count$;
    this.loading$ = this.orderService.loading$;
    this.error$ = this.orderService.errors$;
  }

  getOrder() {
    this.orderService.refresh();
  }
}
