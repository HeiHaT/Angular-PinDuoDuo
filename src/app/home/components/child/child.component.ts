import { AfterViewChecked, Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';
import { formatDate } from '_@angular_common@11.2.11@@angular/common';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewChecked {

  // tslint:disable-next-line:variable-name
  _title: string;
  // tslint:disable-next-line:variable-name
  _time;
  @ViewChild('timeRef', {static: true}) timeRef: ElementRef;
  public get title(): string {
    console.log('脏值检测');
    return this._title;
  }

  public get time(): number {
    return  this._time;
  }


  constructor(private ngZone: NgZone, private rd: Renderer2) {
     this._title = 'hi';
   }

  ngOnInit(): void { }
  ngAfterViewChecked(): void {
    // this._title = '你好maolin';
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
      this._title = '你好maolin';
      // this._time = Date.now();
      // this.timeRef.nativeElement.innerText = Date.now();
      // 上面方式改造  如下,使用的是Render2方式
      // this.rd.setProperty(this.timeRef.nativeElement, 'innerText', Date.now() );
      // 下面使用日期管道方式操作
      this.rd.setProperty(
        this.timeRef.nativeElement,
        'innerText',
        formatDate(Date.now(), 'HH:mm:ss:SS', 'zh-Hans' )
      );
    }, 100);
    });
  }
  // tslint:disable-next-line:typedef
  handleClick() {

  }


}
