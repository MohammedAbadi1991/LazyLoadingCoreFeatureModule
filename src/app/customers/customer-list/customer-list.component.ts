import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomerList } from '../Models/customerList.model';
import { CustomerService } from '../services/customer.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, OnDestroy {


  customers: CustomerList[] = [];
  getCustomersSubscription: Subscription;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {

    this.getCustomersSubscription = this.customerService.getCustomerList().subscribe(x => {
      this.customers = x;
    });

  }
  ngOnDestroy(): void {
    this.getCustomersSubscription.unsubscribe();
  }
}
