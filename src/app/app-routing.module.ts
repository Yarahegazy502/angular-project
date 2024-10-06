import { Error404Component } from './error404/error404.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { PostsComponent } from './posts/posts.component';
import { ParentComponent } from './parent/parent.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-details/:id/:title', component: ProductDetailsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'parent', component: ParentComponent },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
