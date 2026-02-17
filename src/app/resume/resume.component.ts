import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet, RouterLink } from "@angular/router";
import { NavbarComponent } from "../components/navbar/navbar.component";

@Component({
    selector: 'resume',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterLink, NavbarComponent],
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
    
  })
  export class ResumeComponent {
    title = 'resume';
  }
  