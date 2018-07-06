import { AppContainerComponent } from './components/app-container/app-container.component';
import { WpfConfigComponent } from './components/wpf-config/wpf-config.component';
import { AngularConfigComponent } from './components/angular-config/angular-config.component';
import { ProjectNotFoundComponent } from './components/project-not-found/project-not-found.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    component: AppContainerComponent,
    children: [
      { path: 'wpf', component: WpfConfigComponent },
      { path: 'angular', component: AngularConfigComponent },
      { path: '**', component: ProjectNotFoundComponent }
    ]
  }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
