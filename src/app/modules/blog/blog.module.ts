import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './pages/blog/blog.component';
import {PostsComponent} from "./components/posts/posts.component";


@NgModule({
  declarations: [
    BlogComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule {
}
