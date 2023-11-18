import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { PhotographyComponent } from './photography/photography.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent, pathMatch: 'full'},
    { path: 'resume', component: ResumeComponent, pathMatch: 'full'},
    { path: 'projects', component: ProjectsComponent, pathMatch: 'full'},
    { path: 'photography', component: PhotographyComponent, pathMatch: 'full'}
];
