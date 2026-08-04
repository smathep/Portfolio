import { Component } from "@angular/core";

import { RouterOutlet, RouterLink } from "@angular/router";
import { NavbarComponent } from "../components/navbar/navbar.component";

@Component({
    selector: 'resume',
    imports: [RouterOutlet, RouterLink, NavbarComponent],
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
  export class ResumeComponent {
    title = 'resume';
  }
  