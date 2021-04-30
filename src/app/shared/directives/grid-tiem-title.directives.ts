import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appGridItemTitle]',
})
export class GridItemTitleDirective   {



    @HostBinding('style.font-size') @Input() appGridItemTitle = '0.5rem';
    @HostBinding('style.grid-area') area = 'title';
    @HostBinding('style.white-space') wrap = 'nowrap';

    // constructor(private elr: ElementRef, private rd2: Renderer2){
    //     this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'title');
    // }
}
