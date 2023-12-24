import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-route-parameter',
  templateUrl: './route-parameter.component.html',
  styleUrl: './route-parameter.component.css'
})
export class RouteParameterComponent {
  name: string = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // Retrieve the parameter inside Params[] -> store it in the variable name
      this.name = params['route-parameter'];
    });
  }
}
