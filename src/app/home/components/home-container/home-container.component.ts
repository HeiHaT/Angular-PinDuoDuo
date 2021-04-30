import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ImageSliderComponent, TopMenu } from 'src/app/shared';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService, token } from '../../services';
// import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  constructor(
    private router: Router,
    private service: HomeService,
    private route: ActivatedRoute
    ) { }

    @Inject(token) private baserUrl2: string;
    @ViewChild('imageSlider') imageSlider: ImageSliderComponent;
    scrollableTabagColor = 'red';
    topMenus: TopMenu[] = [];
    color: 'red';
    selectedTabLink$: Observable<string>;
    ngOnInit(): void {
      this.selectedTabLink$ = this.route.firstChild.paramMap.pipe(
        filter(params => params.has('tabLink')),
        map(params => params.get('tabLink'))
      );
      console.log(this.selectedTabLink$);
      alert(this.selectedTabLink$);
      // this.topMenus = this.service.getTabs();
      // 展示异步方法
      this.service.getTabs().subscribe( tabs => { this.topMenus = tabs; });
      // 打印services传过来的token
      console.log(this.baserUrl2);
    }
    // tslint:disable-next-line:typedef
    handleTabSelected(topMenus: TopMenu){
      const colors = ['green', 'blue', 'black', 'red', 'pink'];
      const idx = Math.floor(Math.random() * 2);
      this.scrollableTabagColor = colors[idx];
      console.log(topMenus);
      // 跳转
      this.router.navigate(['home', topMenus.link]);
    }
    // tslint:disable-next-line:use-lifecycle-interface
    ngAfterViewInit(): void {
     console.log('ngAfterViewInit', this.imageSlider);
    }

}
