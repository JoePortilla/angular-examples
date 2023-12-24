import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InterpolationVariableComponent} from './interpolation-variable/interpolation-variable.component';
import {InterpolationObjectComponent} from './interpolation-object/interpolation-object.component';
import {InterpolationInterfaceComponent} from './interpolation-interface/interpolation-interface.component';
import {EventBindingSimpleComponent} from './event-binding-simple/event-binding-simple.component';
import {EventBindingMethodComponent} from './event-binding-method/event-binding-method.component';
import {
  ClassBindingDirectBtnDisabledComponent
} from './class-binding-direct-btn-disabled/class-binding-direct-btn-disabled.component';
import {
  ClassBindingMultipleBtnDisabledComponent
} from './class-binding-multiple-btn-disabled/class-binding-multiple-btn-disabled.component';
import {
  ClassBindingDirectTxtColorComponent
} from './class-binding-direct-txt-color/class-binding-direct-txt-color.component';
import {
  PropertyBindingBtnDisabledComponent
} from './property-binding-btn-disabled/property-binding-btn-disabled.component';
import {PropertyBindingImgToggleComponent} from './property-binding-img-toggle/property-binding-img-toggle.component';
import {NgOptimizedImage} from "@angular/common";
import {TemplateVariableComponent} from './template-variable/template-variable.component';
import {DirectiveNgifComponent} from './directive-ngif/directive-ngif.component';
import {DirectiveNgforComponent} from './directive-ngfor/directive-ngfor.component';
import {DirectiveNgswitchComponent} from './directive-ngswitch/directive-ngswitch.component';
import {FormTemplateDrivenComponent} from './form-template-driven/form-template-driven.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  FormTemplateDrivenValidationComponent
} from './form-template-driven-validation/form-template-driven-validation.component';
import {FormReactiveComponent} from './form-reactive/form-reactive.component';
import {FormReactiveFormgroupComponent} from './form-reactive-formgroup/form-reactive-formgroup.component';
import {FormReactiveFormbuilderComponent} from './form-reactive-formbuilder/form-reactive-formbuilder.component';
import { FatherComponent } from './input/father/father.component';
import { ChildComponent } from './input/child/child.component';
import { Father2Component } from './output/father2/father2.component';
import { Child2Component } from './output/child2/child2.component';
import { AddMessagesComponent } from './service/add-messages/add-messages.component';
import { ListMessagesComponent } from './service/list-messages/list-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationVariableComponent,
    InterpolationObjectComponent,
    InterpolationInterfaceComponent,
    EventBindingSimpleComponent,
    EventBindingMethodComponent,
    ClassBindingDirectBtnDisabledComponent,
    ClassBindingMultipleBtnDisabledComponent,
    ClassBindingDirectTxtColorComponent,
    PropertyBindingBtnDisabledComponent,
    PropertyBindingImgToggleComponent,
    TemplateVariableComponent,
    DirectiveNgifComponent,
    DirectiveNgforComponent,
    DirectiveNgswitchComponent,
    FormTemplateDrivenComponent,
    FormTemplateDrivenValidationComponent,
    FormReactiveComponent,
    FormReactiveFormgroupComponent,
    FormReactiveFormbuilderComponent,
    FatherComponent,
    ChildComponent,
    Father2Component,
    Child2Component,
    AddMessagesComponent,
    ListMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
