import { ReactConfigComponent } from './react-config.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: ReactConfigComponent }];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
