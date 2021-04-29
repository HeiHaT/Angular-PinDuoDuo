import { Component, Injectable, InjectionToken, Injector, OnInit } from '@angular/core';
import { Data } from '@angular/router';

// 演示依赖注入
@Injectable()
class Proudct {
  // 下面相当于
  // private name: string;
  constructor(private name: string, private color: string){
  }
}

class PurchaseOrder {
  // private product: Proudct; 换一个写法
  private amount: number;
  constructor(private product: Proudct) {
    this.product = new Proudct('大米手机', '黑色');
  }
}

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

    // 注解 默认情况下只有一份
    // 字符串容易冲突 可以写个token
    const token = new  InjectionToken<string>('baseUrl');
    const injector = Injector.create({
      providers: [
        {
          provide: Proudct,
          useFactory: () => {
            return new Proudct('谭茂林Angular', '黑色');
          },
          deps: []
        },
        {
          provide: PurchaseOrder,
          useClass: PurchaseOrder,
          deps: [Proudct]
        },
        {
          provide: token,
          useValue: '我是注入器userValue取到的值'
        }
      ]
    });
    console.log(injector.get(Proudct));
    console.log(injector.get(PurchaseOrder));
    // console.log(injector.get('baseUrl'));
    console.log(injector.get(token));
  }
  // tslint:disable-next-line:typedef
  // new Data() 不能用
  // minusDays(data: Data, days: number){
  //   const result = new Data(data);
  //   result.setData(result.getData() - days);
  //   return result;
  // }
}
