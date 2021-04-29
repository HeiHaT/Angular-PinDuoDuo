import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {
   obj = { productID: 2 , productName: 'xxx手机', model: 's', type: '全面屏'};
   price: number;
   data: [1, 2, 3, 4, 5];
   constructor() { }

  ngOnInit(): void {
    this.price = 123.025;
    // Datanew Data()不能用
    // this.data = this.minusDays(new Data() -60)
  }
  // tslint:disable-next-line:typedef
  // new Data() 不能用
  // minusDays(data: Data, days: number){
  //   const result = new Data(data);
  //   result.setData(result.getData() - days);
  //   return result;
  // }
}
