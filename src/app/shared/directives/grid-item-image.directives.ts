import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appGridItemImage]',
})
export class GridItemImageDirective implements OnInit {
    @Input() appGridItemImage = '2rem';
    @Input() fiMode = 'cover';
    constructor(private elr: ElementRef, private rd2: Renderer2){
    }
    // tslint:disable-next-line:use-lifecycle-interface
    ngOnInit(): void {
        this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'image');
        this.rd2.setStyle(this.elr.nativeElement, 'width', this.appGridItemImage);
        this.rd2.setStyle(this.elr.nativeElement, 'height', this.appGridItemImage);
        this.rd2.setStyle(this.elr.nativeElement, 'object-fit', this.fiMode);
    }

    @HostListener('click', ['$event.target'])
    // tslint:disable-next-line:typedef
    handleClick(ev) {
        console.log(ev);
    }
}
