import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {

  customer: Customer;
  constructor(private route: ActivatedRoute, 
    private router: Router, 
      private customerService: CustomerServiceService) {
        this.customer = new Customer();
       }

       onSubmit() {
        this.customerService.save(this.customer).subscribe(result => this.gotoList());
      }
    
      gotoList() {
        this.router.navigate(['/customers']);
      }
}
