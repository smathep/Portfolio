import { Component } from "@angular/core";

import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "../components/navbar/navbar.component";

@Component({
    selector: 'projects',
    imports: [RouterOutlet, NavbarComponent],
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
  export class ProjectsComponent {
    title = 'projects';
  }
  