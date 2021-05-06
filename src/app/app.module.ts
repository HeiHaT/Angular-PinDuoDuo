import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
// 导入中文文件
import localZh from '@angular/common/locales/zh-Hans';
import { registerLocaleData } from '_@angular_common@11.2.11@@angular/common';
import { RecommendModule } from './recommend';
import { MyModule } from './my';
import { ProductModule } from './product';

@NgModule({
  // 自己设置的组件放入的地方 别人的不能放  记住记住记住
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    RecommendModule,
    MyModule,
    ProductModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'zh-Hans'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localZh, 'zh');
  }
}
