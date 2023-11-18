import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "../components/navbar/navbar.component";

@Component({
    selector: 'resume',
    standalone: true,
    imports: [CommonModule, RouterOutlet, NavbarComponent],
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
    
  })
  export class ResumeComponent {
    title = 'resume';
  }
  