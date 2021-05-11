import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '_@angular_router@11.2.11@@angular/router';
import { Observable } from '_rxjs@6.6.7@rxjs';
import { TabItem } from './shared/domain';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  selectedIndex$: Observable<number>;
  // 声明流
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.selectedIndex$ = this.router.events.pipe(
      //
      filter(ev => ev instanceof NavigationEnd),
      map((ev: NavigationEnd) => {
        const arr = ev.url.split('/');
        return arr.length > 1 ? arr[1] : 'home';
      }),
      map(tab => this.getSelectedIndex(tab))
    );
  }
  handleTabSelect(tab: TabItem): void {
    this.router.navigate([tab.link]);
  }

  getSelectedIndex(tab: string): any {
    return tab === 'recommend'
      ? 1
      : tab === 'category'
      ? 2
      : tab === 'chat'
      ? 3
      : tab === 'my'
      ? 4
      : 0;
  }
  removeDialog(): any {
    // this.dialogService.close();
  }
}
