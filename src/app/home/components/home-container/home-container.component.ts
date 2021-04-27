import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageSliderComponent, TopMenu } from 'src/app/shared';

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
  // tslint:disable-next-line:typedef
  handleTabSelected(topMenus: TopMenu){
    const colors = ['green', 'blue', 'black', 'red', 'pink'];
    const idx = Math.floor(Math.random() * 5);
    this.scrollableTabagColor = colors[idx];
    console.log(topMenus);
  }
  ngOnInit(): void{
  }

}
