import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Order } from '../models/orders';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrderService extends EntityCollectionServiceBase<Order> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('order', serviceElementsFactory);
  }

  public getOrder( ): Observable<Order[]> {
    return this.getWithQuery({});
  }

  public refresh(): Observable<Order[]> {
    this.clearCache();
    return this.getOrder();
  }
}
