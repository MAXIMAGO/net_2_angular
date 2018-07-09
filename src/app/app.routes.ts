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
      /**
       * See in the dev tools network monitor that the following two modules will only be loaded if requested
       * This is one of the key features in general to keep in mind while
       * writing larger scaled web applications.
       */
      { path: 'react', loadChildren: './lazy-external/lazy-external.module#LazyExternalModule' },
      { path: 'service', loadChildren: './net-service-config/net-service-config.module#NetServiceConfigModule' },
      { path: '**', component: ProjectNotFoundComponent }
    ]
  }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
