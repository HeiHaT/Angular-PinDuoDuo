import { Component, OnInit } from '@angular/core';
import { Confirmable, Emoji } from '../decorators';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {


  // 自己添加的注解 文件在decorators
  @Emoji() result = 'Mao Lin';

  constructor() { }

  @Confirmable('您确定要执行么？')
  // tslint:disable-next-line:typedef
  handleClick() {
    console.log('点击已执行！');
  }
  ngOnInit(): void {
  }

}

