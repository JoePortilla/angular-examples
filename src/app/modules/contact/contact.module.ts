import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContactRoutingModule} from './contact-routing.module';
import {ContactComponent} from './pages/contact/contact.component';
import {FormComponent} from "./components/form/form.component";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ContactComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ]
})
export class ContactModule {
}
