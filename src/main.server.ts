import { bootstrapApplication } from '@angular/platform-browser';
import { AppRoot } from './app/app/app.component';
import { HomepageComponent } from './app/homepage/homepage.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppRoot, config);

export default bootstrap;
