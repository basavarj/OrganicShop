import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    component: ProductListComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'product-details/:id',
    component:ProductDetailsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
