import { Component, OnInit, OnDestroy } from '@angular/core';
import { orderList } from '../Models/orderList.model';
import { OrderService } from '../services/order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnDestroy {

  constructor(private orderService: OrderService) { }
  orders: orderList[] = [];
  getOrdersSubscription: Subscription;
  ngOnInit() {
    this.getOrdersSubscription = this.orderService.getOrderList().subscribe(x => {
      this.orders = x;
    });
  }

  ngOnDestroy(): void {
    this.getOrdersSubscription.unsubscribe();
  }


}

