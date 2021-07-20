import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Confirmable, Emoji } from '../../decorators';

export interface Channel {
  id: number;
  icon: string;
  title: string;
  link: string;
}


@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css'],
  // 脏值检测  定义在某个组件里面,只会跑对呀的数 检测自己模块的
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HorizontalGridComponent implements OnInit {

  @Input() cols = 8;
  @Input() dispalyCols = 5;
  sliderMargin = '0';

  // 自己添加的注解 文件在decorators
  @Emoji() result = 'Mao Lin';

  constructor() { }

  @Confirmable('您确定要执行么？')

  handleClick(): void {
    console.log('点击已执行！');
  }
  ngOnInit(): void {
  }

  public get scrollable(): boolean {
    return this.cols > this.dispalyCols;
  }

  public get templateRows(): string {
    return `minmax(auto, max-content)`;
  }
  public get templateColumns(): string {
    return `repeat(${this.cols}, calc((100vw - ${this.dispalyCols *
      0.4}rem) / ${this.dispalyCols}))`;
  }

  handleScroll(ev): void{
    this.sliderMargin = `0 ${(100 * ev.target.scrollLeft) /
      ev.target.scrollWidth}%`;
  }
}

