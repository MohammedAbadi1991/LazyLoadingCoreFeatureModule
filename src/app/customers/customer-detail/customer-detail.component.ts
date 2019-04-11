import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription, forkJoin } from 'rxjs';
import { Company } from '../Models/Company.model';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit, OnDestroy {

  customerForm: FormGroup;
  getDataSubscription: Subscription;
  companies: Company[] = [];
  id: number;
  constructor(private formbuilder: FormBuilder, private customerService: CustomerService, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.customerForm = this.formbuilder.group({
      id: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      desription: new FormControl(''),
      title: new FormControl('')
    });
    this.activatedroute.params.subscribe(params => {
      this.id = params['id'];
      this.getDataSubscription = forkJoin(
        this.customerService.getCustomerById(this.id), 
        this.customerService.getCompaniesList()
      ).subscribe(([customer, companies]) => {
        this.customerForm.patchValue(customer[0]);
        this.companies = companies;
      });


    });
  }

  ngOnDestroy(): void {
    this.getDataSubscription.unsubscribe();
  }

}

