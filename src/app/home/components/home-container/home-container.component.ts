import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageSliderComponent, TopMenu } from 'src/app/shared';
import { Router } from '_@angular_router@11.2.11@@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  constructor(private router: Router) { }
  @ViewChild('imageSlider') imageSlider: ImageSliderComponent;
  scrollableTabagColor = 'red';
  topMenus: TopMenu[] = [{
    title: '热门',
    link: 'hot',
    id: 1
    },
    {
      title: '男装',
      link: 'men',
       id: 2
    },
    {
      title: '百货',
      link: 'department',
      id: 3
    },
    {
      title: '运动',
      link: 'sports',
      id: 4
    },
    {
      title: '手机',
      link: 'mobile',
      id: 5
    },
    {
      title: '家访',
      link: 'textile',
      id: 6
    },
    {
      title: '食品',
      link: 'food',
      id: 7
    },
    {
      title: '电器',
      link: 'hot',
      id: 8
    },
    {
      title: '鞋包',
      link: 'wallet',
      id: 9
    },
    {
      title: '汽车',
      link: 'hot',
      id: 10
    },
    {
      title: '食品',
      link: 'hot',
      id: 11
    },
    {
      title: '电器',
      link: 'hot',
      id: 12
    },
    {
      title: '内衣',
      link: 'underwears',
      id: 13
    },
    {
      title: '家装',
      link: 'home',
       id: 14
    },
    {
      title: '母婴',
      link: 'baby',
       id: 15
    },
    {
      title: '美妆',
      link: 'makeup',
       id: 16
    }
  ];
    color: 'red';
    // tslint:disable-next-line:typedef
    handleTabSelected(topMenus: TopMenu){
      const colors = ['green', 'blue', 'black', 'red', 'pink'];
      const idx = Math.floor(Math.random() * 5);
      this.scrollableTabagColor = colors[idx];
      console.log(topMenus);
      // 跳转
      this.router.navigate(['home', topMenus.link]);
    }
    // tslint:disable-next-line:use-lifecycle-interface
    ngAfterViewInit(): void {
     console.log('ngAfterViewInit', this.imageSlider);
    }
  ngOnInit(): void{
  }

}
