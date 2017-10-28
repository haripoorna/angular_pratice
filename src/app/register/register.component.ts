import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CommonService} from "../services/common.service";
import {Country} from '../models/Country';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  User:any
  isVisible ="visible"
  isReadOnly = true;
  Countries:Array<Country>
  constructor(public router:Router,private commonSvc:CommonService) {
  this.User={
    Email:"xx@gmail.com"
  };
 }


  ngOnInit() {
    this.commonSvc.getCountryList()
    .subscribe(result=>{
       this.Countries= result;
       console.log(this.Countries);
    })
  }
  register(){
    console.log(this.User);
    this.commonSvc.registerUser(this.User)
    .subscribe(res=>{
      console.log(res);
    });
//this.router.navigate(["/products"]);
  }
}
