import { Component, OnInit, ViewChild } from '@angular/core';
import { Channel, ImageSlider, ImageSliderComponent, TopMenu } from 'src/app/shared';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  constructor() { }
  @ViewChild('imageSlider') imageSlider: ImageSliderComponent;
  scrollableTabagColor = 'red';
  topMenus: TopMenu[] = [{
    title: '热门',
    link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '百货',
      link: ''
    },
    {
      title: '运动',
      link: ''
    },
    {
      title: '手机',
      link: ''
    },
    {
      title: '家访',
      link: ''
    },
    {
      title: '食品',
      link: ''
    },
    {
      title: '电器',
      link: ''
    },
    {
      title: '鞋包',
      link: ''
    },
    {
      title: '汽车',
      link: ''
    },
    {
      title: '食品',
      link: ''
    },
    {
      title: '电器',
      link: ''
    },
    {
      title: '鞋包',
      link: ''
    },
    {
      title: '汽车',
      link: ''
    }
  ];
    color: 'red';
    sliders: ImageSlider[] = [
      {
       imgUrl: '../assets/images/1.jpg',
       link: '',
       caption: ''
      },
      {
        imgUrl: '../assets/images/2.jpg',
        link: '',
        caption: ''
       },
       {
        imgUrl: '../assets/images/3.jpg',
        link: '',
        caption: ''
       },
       {
        imgUrl: '../assets/images/4.jpg',
        link: '',
        caption: ''
       },
       {
        imgUrl: '../assets/images/5.jpg',
        link: '',
        caption: ''
       },
    ];
    channels: Channel[] = [
      {
        id: 1,
        title: '限时秒杀',
        icon: '../../../../assets/icons/brand.png' ,
        link : 'hot'
      },
      {
        id: 1,
        title: '清仓处理',
        icon: '../../../../assets/icons/cashback.png' ,
        link : 'hot'
      },
      {
        id: 1,
        title: '欢迎抢购',
        icon: '../../../../assets/icons/fav_store.png' ,
        link : 'hot'
      },
      {
        id: 1,
        title: '限时秒杀',
        icon: '../../../../assets/icons/membership.png' ,
        link : 'hot'
      },
      {
        id: 1,
        title: '限时秒杀',
        icon: '../../../../assets/icons/friends.png' ,
        link : 'hot'
      },
      {
        id: 1,
        title: '限时秒杀',
        icon: '../../../../assets/icons/history.png' ,
        link : 'hot'
      },
      {
        id: 1,
        title: '限时秒杀',
        icon: '../../../../assets/icons/more.png' ,
        link : 'hot'
      },
      {
        id: 1,
        title: '限时秒杀',
        icon: '../../../../assets/icons/brand.png' ,
        link : 'hot'
      },
      {
        id: 1,
        title: '限时秒杀',
        icon: '../../../../assets/icons/friends.png' ,
        link : 'hot'
      },
      {
        id: 1,
        title: '限时秒杀',
        icon: '../../../../assets/icons/history.png' ,
        link : 'hot'
      },
      {
        id: 1,
        title: '限时秒杀',
        icon: '../../../../assets/icons/more.png' ,
        link : 'hot'
      },
      {
        id: 1,
        title: '限时秒杀',
        icon: '../../../../assets/icons/friends.png' ,
        link : 'hot'
      },
      {
        id: 1,
        title: '限时秒杀',
        icon: '../../../../assets/icons/history.png' ,
        link : 'hot'
      },
      {
        id: 1,
        title: '限时秒杀',
        icon: '../../../../assets/icons/friends.png' ,
        link : 'hot'
      },
      {
        id: 1,
        title: '限时秒杀',
        icon: '../../../../assets/icons/history.png' ,
        link : 'hot'
      },
    ];
    // tslint:disable-next-line:typedef
    handleTabSelected(topMenus: TopMenu){
      const colors = ['green', 'blue', 'black', 'red', 'pink'];
      const idx = Math.floor(Math.random() * 5);
      this.scrollableTabagColor = colors[idx];
      console.log(topMenus);
    }
    // tslint:disable-next-line:use-lifecycle-interface
    ngAfterViewInit(): void {
     console.log('ngAfterViewInit', this.imageSlider);
    }
  ngOnInit(): void{
  }

}
