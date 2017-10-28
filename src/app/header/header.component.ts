import { Component, OnInit } from '@angular/core';
import { Tabs } from "../models/TabModel";
import { IHeader } from "./IHeader";
import { Observable } from 'rxjs';
import {CommonService} from "../services/common.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, IHeader {
  BrandName: String
  PageName: String
  Tabs: Array<String>
  values: Array<any> = [];
  anyErrors: Error;
  cart:Array<any>
  private Count: Observable<number[]>;
  constructor(private commonSvc:CommonService) {
    this.BrandName = "DigiKart";
    this.Tabs = Tabs;
    this.commonSvc.getCart()
    .subscribe(res=>{
      this.cart= res;
    })

  }

  ngOnInit() {

    this.Count = new Observable(observer => {
      setTimeout(() => {
        observer.next(10);
      }, 1500);

      setTimeout(() => {
        observer.next(50);
      }, 2000);
      setTimeout(() => {
        observer.error(new Error('Something bad happened!'));
      }, 2500);

    });

    let subscription = this.Count.subscribe(
      value => this.values.push(value),
      error => this.anyErrors = error
    );
  }

  LoadPage(data) {
    this.PageName = data;
  }


}
