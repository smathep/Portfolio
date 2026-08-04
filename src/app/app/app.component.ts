import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HomepageComponent } from '../homepage/homepage.component';
// import { MatToolbar } from '@angular/material/toolbar';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, HomepageComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppRoot {
  title = 'app-root';
}
