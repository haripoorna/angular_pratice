import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
  //providers:[CommonService]
})
export class CartComponent implements OnInit {
  selectedProducts:Array<any>
  constructor(private commonSvc:CommonService) {
    this.selectedProducts=[];
    this.selectedProducts = this.commonSvc.getOrderData();
   }
  ngOnInit() {
  }
}
