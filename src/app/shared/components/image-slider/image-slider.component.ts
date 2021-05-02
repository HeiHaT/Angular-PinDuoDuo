import {
        AfterViewInit,
        ChangeDetectionStrategy,
        Component, ElementRef,
        Input,
        OnInit,
        QueryList,
        Renderer2,
        ViewChild,
        ViewChildren
        } from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}


@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  // 脏值检测  定义在某个组件里面,只会跑对呀的数 检测自己模块的
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageSliderComponent
 implements
  OnInit,
  AfterViewInit
 {

  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';
  selectedIndex = 0;
  intervalId;
  @Input() intervalByseconds = 2;
  @ViewChild('imageSlider', { static: true}) imageSlider: ElementRef;
  // @ViewChildren('img')  imgs: QueryList<ElementRef> ;

  constructor(private rd2: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // angularg改变dom节点方式
    // console.log('ngAfterViewInit', this.imgs);
    // this.imgs.forEach(item => {
    //   // this.rd2.setStyle(item.nativeElement, 'height', '200px');
    // });
    if (this.intervalByseconds <= 0) {
      return;
    }
    this.intervalId = setInterval(() => {
      // tslint:disable-next-line:max-line-length
      this.rd2.setProperty(
          this.imageSlider.nativeElement,
          'scrollLeft',
          ((this.getIndex(++this.selectedIndex)) *
            this.imageSlider.nativeElement.scrollWidth) /
            this.sliders.length
        );
    }, this.intervalByseconds * 1000 );
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
  getIndex(idx: number): number {
     return idx  >= 0 ? idx % this.sliders.length
     : this.sliders.length - Math.abs(idx % this.sliders.length);
  }
  // tslint:disable-next-line:typedef
  handleScroll(e) {
    const ratio =
    (e.target.scrollLeft * this.sliders.length) / e.target.scrollWidth;
    this.selectedIndex = Math.round(ratio);
  }
}
