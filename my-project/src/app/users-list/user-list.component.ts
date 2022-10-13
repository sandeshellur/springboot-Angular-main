import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customerService: CustomerServiceService) { 
    
  }

  ngOnInit() {

    this.customerService.findAll().subscribe(data => {
      this.customers = data;
    });
  }

}
