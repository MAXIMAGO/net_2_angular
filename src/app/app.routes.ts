import { WpfConfigComponent } from './components/wpf-config/wpf-config.component';
import { AngularConfigComponent } from './components/angular-config/angular-config.component';
import { ProjectNotFoundComponent } from './components/project-not-found/project-not-found.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  { path: 'wpf', component: AngularConfigComponent },
  { path: 'angular', component: WpfConfigComponent },
  { path: '**', component: ProjectNotFoundComponent }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
