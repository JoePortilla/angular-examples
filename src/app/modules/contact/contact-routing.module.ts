import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from "./components/form/form.component";
import {ContactComponent} from "./pages/contact/contact.component";

const routes: Routes = [
  {
    // http://localhost:4200/contact
    path: '',
    component: ContactComponent
  },
  {
    // http://localhost:4200/contact/form
    path: 'form',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {
}
