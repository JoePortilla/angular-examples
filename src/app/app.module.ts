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
    PropertyBindingImgToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
