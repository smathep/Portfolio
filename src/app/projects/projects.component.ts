import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "../components/navbar/navbar.component";

@Component({
    selector: 'projects',
    standalone: true,
    imports: [CommonModule, RouterOutlet, NavbarComponent],
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
    
  })
  export class ProjectsComponent {
    title = 'projects';
  }
  