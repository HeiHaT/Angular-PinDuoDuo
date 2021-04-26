import { Component, ViewChild } from '@angular/core';
import { ImageSlider, ImageSliderComponent, TopMenu } from './shared/components';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
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
}
