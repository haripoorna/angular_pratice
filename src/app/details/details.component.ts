import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input()
  detail={
    "_id": "593f82c3e9ac45958d414bbc",
    "index": 98,
    "guid": "3be917e7-a965-46a8-a545-028f30a6b027",
    "isActive": true,
    "price": "$3,241.19",
    "picture": "http://placehold.it/32x32",
    "Price": 2287,
    "Make": "Samsung",
    "Model": "Onplus 3",
    "Description": "xxxxx"
  };
  @Output()
  itemsCount:EventEmitter<any>= new EventEmitter<any>();
  numberOfItems:Number=0;
  constructor() {
    this.detail.Price=0;
  }

  ngOnInit() {
  }
addTotalItems(){
  this.itemsCount.next(this.numberOfItems);
}


}
