import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ChangeStyleDirective } from './directives/change-style.directive';
import { ConvertEgpToUsdPipe } from './pipes/convert-egp-to-usd.pipe';
import { FilterNumbersPipe } from './pipes/filter-numbers.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { PostsComponent } from './posts/posts.component';
import { PostItemComponent } from './posts/post-item/post-item.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { Error404Component } from './error404/error404.component';
import { BlogsComponent } from './blogs/blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ProductItemComponent,
    ChangeStyleDirective,
    ConvertEgpToUsdPipe,
    FilterNumbersPipe,
    ParentComponent,
    ChildComponent,
    PostsComponent,
    PostItemComponent,
    ProductDetailsComponent,
    Error404Component,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
