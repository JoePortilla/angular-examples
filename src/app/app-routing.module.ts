import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {InterpolationInterfaceComponent} from "./interpolation-interface/interpolation-interface.component";
import {InterpolationVariableComponent} from "./interpolation-variable/interpolation-variable.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
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
    path: 'interpolation-interface',
    component: InterpolationInterfaceComponent
  },
  {
    path: 'interpolation-variable',
    component: InterpolationVariableComponent
  },
  {
    path: 'hello/:route-parameter',
    component: RouteParameterComponent

  },
  {
    path: 'parent',
    component: ParentRouteComponent,
    children: [
      {
        path: 'child',
        component: ChildRouteComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
