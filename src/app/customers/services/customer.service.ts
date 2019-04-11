import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs'
import { CustomerList } from '../Models/customerList.model';
import { Customer } from '../Models/customer.model';
import { Company } from '../Models/Company.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  customerList: CustomerList[] = [{ id: 1, fullName: 'Mohammed Abadi' }, { id: 2, fullName: 'Nabil Shdeeed' }];
  customersDetail: Customer[] = [{ id: 1, firstName: 'Mohammed', lastName: 'Abadi', desription: 'only for testing', title: 'Manager' }, { id: 2, firstName: 'Nabil', lastName: 'Shdeed', desription: 'only for testing', title: 'CEO' }];
  companies: Company[] = [{ id: 1, companyName: 'CME', companyRegion: 'Lebanon' }, { id: 2, companyName: 'Subway', companyRegion: 'USA' }];

  getCustomerList() {
    return of(this.customerList);
  }

  getCustomerById(id: number) {
    return of(this.customersDetail.filter(x => x.id == id));
  }

  getCompaniesList() {
    return of(this.companies);
  }

}
