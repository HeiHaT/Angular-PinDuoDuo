import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { filter, map, switchMap } from 'rxjs/operators';
import { Channel, ImageSlider } from 'src/app/shared';
import { Ad, Product } from 'src/app/shared/domain';
import { ActivatedRoute, Router } from '_@angular_router@11.2.11@@angular/router';
import { Observable, Subscription } from '_rxjs@6.6.7@rxjs';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HomeDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: HomeService, private router: Router, private cd: ChangeDetectorRef) { }
  selectedTabLink$: Observable<string>;
  sliders$: Observable<ImageSlider[]>;
  channels$: Observable<Channel[]>;
  ad$: Observable<Ad[]>;
  sub: Subscription;
  products$: Observable<Product[]>;
  ngOnInit(): void {
    this.selectedTabLink$ = this.route.paramMap.pipe(
      filter(params => params.has('tablink')),
      map(params => params.get('tablink')),
    );
    console.log(this.selectedTabLink$);
    this.sub = this.route.queryParamMap.subscribe(params => {
      console.log('查询参数', params);
    });
    this.sliders$ = this.service.getBanners();
    this.channels$ = this.service.getChannels();
    this.ad$ = this.selectedTabLink$.pipe(
      switchMap(tab => this.service.getAdByTab(tab))
    );
    this.products$ = this.selectedTabLink$.pipe(
      switchMap(tab => this.service.getProductsByTab(tab))
    );
    console.log(this.ad$);
  }
  // tslint:disable-next-line:typedef
  handleTabSelected(link){
    // 跳转
    this.router.navigate(['home', link]);
  }

}
