import {Component} from '@angular/core';

@Component({
  selector: 'app-property-binding-img-toggle',
  templateUrl: './property-binding-img-toggle.component.html',
  styleUrl: './property-binding-img-toggle.component.css'
})
export class PropertyBindingImgToggleComponent {
  img_path = '';
  img_color_path: string = 'assets/color.png';
  img_color_trace_path: string = 'assets/color_trazo.png';
  img_trace_path: string = 'assets/trazo.png';
}
