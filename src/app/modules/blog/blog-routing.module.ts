import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from "./components/posts/posts.component";
import {BlogComponent} from "./pages/blog/blog.component";

const routes: Routes = [
  {
    // http://localhost:4200/blog
    path: '',
    component: BlogComponent
  },
  {
    // http://localhost:4200/blog/posts
    path: 'posts',
    component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {
}
