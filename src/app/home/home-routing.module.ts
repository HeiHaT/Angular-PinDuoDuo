import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAuxComponent, HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, ParentComponent } from './components';

const routes: Routes = [
  {
    path: 'home',
    component: HomeContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'hot',
        pathMatch: 'full'
      },
      {
        path: ':tablink',
        component: HomeDetailComponent,
        children: [
          {
            path: 'aux',
            component: HomeAuxComponent,
            outlet: 'second'
          },
          {
            path: 'grand',
            component: HomeGrandComponent
          },
          {
            path: 'change-detection',
            pathMatch: 'full',
            component: HomeGrandComponent
          }
        ]
      },
      {
        path: 'change-detection',
        pathMatch: 'full',
        component: HomeGrandComponent
      }
    ]
  },
  {
    path: 'change-detection',
    pathMatch: 'full',
    component: ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
