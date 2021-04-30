
// 指令的绑定放松
// import { Directive, ElementRef, HostBinding, OnInit, Renderer2 } from '@angular/core';
import { Directive, HostBinding } from '@angular/core';



// 指令可以理解为没有模版的组件，它需要一个宿主元素。
// 推荐使用方括号[] 指定Selector，使它变成一个属性。



@Directive({
    selector: '[appGridItem]',
})
export class GridItemDirective {

    // 使用的容器
    @HostBinding('style.display') display = 'grid';
    @HostBinding('style.grid-template-areas') template = `'image' 'title'`;
    @HostBinding('style.place-items') align = 'center';
    @HostBinding('style.width') width = '4rem';


    // 使用指令的绑定方式  里面使用的是Renderer2
    // constructor(private elr: ElementRef, private rd2: Renderer2){
    // }
    // ngOnInit(): void {
    //     this.rd2.setStyle(this.elr.nativeElement, 'display', 'grid');
    //     this.rd2.setStyle(this.elr.nativeElement, 'grid-template-areas', `'image' 'title'`);
    //     this.rd2.setStyle(this.elr.nativeElement, 'place-items', 'center');
    //     this.rd2.setStyle(this.elr.nativeElement, 'width', '4rem');
    // }
}
