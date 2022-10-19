import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class CustomerServiceService {

  private baseUrl = 'http://localhost:8080/customers';

  constructor(private http: HttpClient) {}

  public findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}`+'/users');
  }

  public save(customer: Customer):Observable<Object> {
    console.log(customer)
    return this.http.post(`${this.baseUrl}`+'/add', customer,{responseType:'text' as 'json'});
  }
}
