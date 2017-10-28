import {Injectable} from '@angular/core';
import{Observable,Subject} from 'rxjs';

import {Http} from '@angular/http';
import 'rxjs';
@Injectable()
export class CommonService{
  orders =[];
  SelectedProducts:Subject<any>= new Subject<any>();

  constructor(private http:Http){
  }
  getOrderData(){
    return this.orders;
  }
  setOrderData(data){
    this.orders.push(data);
    this.SelectedProducts.next(this.orders);
  }

  getCart():Observable<any>{
    return this.SelectedProducts.asObservable();
  }
  
  getCountryList():Observable<any>{
    return this.http.get("https://restcountries.eu/rest/v2/all")
     .map(res=>{
      console.log(res);
      return res.json()
    });

  }
  registerUser(userData):Observable<any>{
    return this.http.post("http://localhost:3000/users/register",userData)
    .map(res=>{
      console.log(res);
      return res.json()});
  }


}
