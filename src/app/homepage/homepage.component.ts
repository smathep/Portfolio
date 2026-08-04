import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
// import { MatToolbar } from '@angular/material/toolbar';

@Component({
    selector: 'homepage',
    imports: [RouterOutlet, NavbarComponent],
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  title = 'homepage';
}
