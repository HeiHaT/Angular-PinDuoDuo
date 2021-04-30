import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './home/components/home-container/home-container.component';

// const routes: Routes = [
//      { path: '', component: HomeContainerComponent }
// ];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
     pathMatch: 'full'
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
