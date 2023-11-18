import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppRoot } from './app/app/app.component';
import { HomepageComponent } from './app/homepage/homepage.component';
// import { NavbarComponent } from './app/components/navbar/navbar.component';

bootstrapApplication(AppRoot, appConfig)
  .catch((err) => console.error(err));
