import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppRoot } from './app/app/app.component';
import { HomepageComponent } from './app/homepage/homepage.component';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) => bootstrapApplication(AppRoot, config, context);

export default bootstrap;
