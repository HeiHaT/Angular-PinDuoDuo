import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Channel, ImageSlider } from 'src/app/shared';
import { ActivatedRoute } from '_@angular_router@11.2.11@@angular/router';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HomeDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private server: HomeService, private cd: ChangeDetectorRef) { }
  selectedTabLink;
  sliders: ImageSlider[] = [];
  channels: Channel[] = [];
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log('路径参数:', params);
      this.selectedTabLink = params.get('tablink');
      this.cd.markForCheck(); // 配合 changeDetection: ChangeDetectionStrategy.OnPush
      console.log(params.get('tablink'));
    });
    this.route.queryParamMap.subscribe(params => {
      console.log('查询参数:', params);
    });
    // 获取servers 里面返回的值
    // this.sliders = this.server.getBanners();
    // this.channels = this.server.getChannels();
    // 请求方式
    this.server.getBanners().subscribe( tabs => { this.sliders = tabs; });
    this.server.getChannels().subscribe( tabs => { this.channels = tabs; });

  }

}
