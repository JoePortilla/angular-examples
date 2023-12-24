import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RouteParameterComponent} from "./route-parameter/route-parameter.component";
import {ParentRouteComponent} from "./childrenRoutes/parent-route/parent-route.component";
import {ChildRouteComponent} from "./childrenRoutes/child-route/child-route.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    // http://localhost:4200/hello/joe
    path: 'hello/:route-parameter',
    component: RouteParameterComponent

  },
  {
    // http://localhost:4200/parent
    path: 'parent',
    component: ParentRouteComponent,
    children: [
      {
        // http://localhost:4200/parent/child
        path: 'child',
        component: ChildRouteComponent
      }
    ]
  },
  {
    path: 'blog',
    loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
