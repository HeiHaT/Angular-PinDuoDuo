import { AfterContentInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

// 接口
export interface TopMenu {
  title: string;
  link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})

export class ScrollableTabComponent
  implements
  OnInit,
  OnChanges,
  AfterContentInit,
  OnDestroy
{
  selectIndex = -1;
  title = '拼多多';
  @Input() menus: TopMenu[] =  [];
  @Input() backgroundColor = '';
  @Input() potforColor = '#fff';
  @Input() titlecolor = '#000';
  @Output() tabSelected = new EventEmitter(); // 事件发射器
  // 构造函数永远首先被调用
  constructor() {
    console.log('组件构造使用');
  }
  // 在组件的’@input‘的属性发生变化的时候使用
  // 组件输入属性改变
  ngOnChanges(changes: SimpleChanges): void {
   console.log('组件输入属性改变', changes);
  }
  // 组件初始化完成后调用，在这个函数里面可以安全使用
  ngOnInit(): void {
    console.log('组件初始化');
  }
  // 内荣初始化
  ngAfterContentInit(): void {
    console.log('组件内容初始化');
  }
  // 组件内脏值初始
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewChecked(): void {
    // console.log('组件内容脏值初始');
  }
  // 组件视图初始化
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void {
    console.log('组件视图初始化');
  }

  // 组件销毁 需要做一些清理的工作
  ngOnDestroy(): void {
    console.log('组件已经销毁');
  }
  // tslint:disable-next-line:typedef
  handleSelection(index: number) {
    this.selectIndex = index;
    this.tabSelected.emit(this.menus[this.selectIndex]);
  }
}
