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

@NgModule({
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
