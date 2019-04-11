import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs'
import { orderList } from '../Models/orderList.model';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  orderList: orderList[] = [{ id: 1, name: 'order 1' }, { id: 2, name: 'order 2' }];
  
  getOrderList() {
    return of(this.orderList);
  }

  

}
