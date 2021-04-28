import { Component, OnInit } from '@angular/core';
import { Channel, ImageSlider } from 'src/app/shared';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

  constructor() { }
  sliders: ImageSlider[] = [
    {
     imgUrl: '../assets/images/1.jpg',
     link: 'hot',
     caption: 'hot'
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
      id: 2,
      title: '清仓处理',
      icon: '../../../../assets/icons/cashback.png' ,
      link : 'hot'
    },
    {
      id: 3,
      title: '欢迎抢购',
      icon: '../../../../assets/icons/fav_store.png' ,
      link : 'hot'
    },
    {
      id: 4,
      title: '限时秒杀',
      icon: '../../../../assets/icons/membership.png' ,
      link : 'hot'
    },
    {
      id: 5,
      title: '限时秒杀',
      icon: '../../../../assets/icons/friends.png' ,
      link : 'hot'
    },
    {
      id: 6,
      title: '限时秒杀',
      icon: '../../../../assets/icons/history.png' ,
      link : 'hot'
    },
    {
      id: 7,
      title: '限时秒杀',
      icon: '../../../../assets/icons/more.png' ,
      link : 'hot'
    },
    {
      id: 8,
      title: '限时秒杀',
      icon: '../../../../assets/icons/brand.png' ,
      link : 'hot'
    },
    {
      id: 9,
      title: '限时秒杀',
      icon: '../../../../assets/icons/friends.png' ,
      link : 'hot'
    },
    {
      id: 10,
      title: '限时秒杀',
      icon: '../../../../assets/icons/history.png' ,
      link : 'hot'
    },
    {
      id: 11,
      title: '限时秒杀',
      icon: '../../../../assets/icons/more.png' ,
      link : 'hot'
    },
    {
      id: 12,
      title: '限时秒杀',
      icon: '../../../../assets/icons/friends.png' ,
      link : 'hot'
    },
    {
      id: 13,
      title: '限时秒杀',
      icon: '../../../../assets/icons/history.png' ,
      link : 'hot'
    },
    {
      id: 14,
      title: '限时秒杀',
      icon: '../../../../assets/icons/friends.png' ,
      link : 'hot'
    },
    {
      id: 15,
      title: '限时秒杀',
      icon: '../../../../assets/icons/history.png' ,
      link : 'hot'
    },
    {
      id: 16,
      title: '限时秒杀',
      icon: '../../../../assets/icons/friends.png' ,
      link : 'hot'
    }
  ];
  ngOnInit(): void {
  }

}
