import { Injectable } from '@angular/core';
import { Channel, ImageSlider, TopMenu } from 'src/app/shared';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Ad, Product } from 'src/app/shared/domain';

@Injectable({
    providedIn: 'root',
    // providedIn: HomeService,
})
export class HomeService {
  constructor(private http: HttpClient) {}
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
      // tslint:disable-next-line:typedef
      getTabs() {
          // return this.topMenus; 'http://39.106.75.209/api/tabs'
          return this.http.get<TopMenu[]>(`${environment.baseUrl}/tabs`);
      }
      // tslint:disable-next-line:typedef
      getChannels() {
          // return this.channels; ' http://39.106.75.209/api/channels'
          return this.http.get<[Channel]>(`${environment.baseUrl}/channels`);
      }
      // tslint:disable-next-line:typedef
      getBanners() {
          // return this.sliders; ' http://39.106.75.209/api/banners '
          return this.http.get<ImageSlider[]>(`${environment.baseUrl}/banners`);
      }
      // tslint:disable-next-line:typedef 'http://39.106.75.209/api/ads'
      getAdByTab(tab: string){
        return this.http.get<Ad[]>(`${environment.baseUrl}/ads`, {
          params: { categories_like: tab }
        });
      }
      // tslint:disable-next-line:typedef 'http://39.106.75.209/api/products'
      getProductsByTab(tab: string) {
        return this.http.get<Product[]>(`${environment.baseUrl}/products`, {
          params: { categories_like: tab }
        });
      }

















      // 请求方式改写
      // tslint:disable-next-line:typedef
    //   getTabs1() {
    //     return this.http.get<TopMenu[]>(`${environment.baseUrl} / banners`, {
    //       params: {icode: `${environment.icode}`}
    //     });
    //   }
    //   // tslint:disable-next-line:typedef
    //   getChannels2() {
    //     return this.http.get(`${environment.baseUrl} / channels`, {
    //       params: {icode: `${environment.icode}`}
    //     });
    //   }
    //  // tslint:disable-next-line:typedef
    //   getBanners2() {
    //     return this.http.get(`${environment.baseUrl} / tabs`, {
    //       params: {icode: `${environment.icode}`}
    //     });
    //   }
}
