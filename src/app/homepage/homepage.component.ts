import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
// import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'homepage',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
  
})
export class HomepageComponent {
  title = 'homepage';
}
