/** Angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

/** Angular.Material */
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';

/** local exports */
import { NetServiceConfigComponent } from './net-service-config.component';

const routes: Routes = [{ path: 'net', component: NetServiceConfigComponent }];

/** Used @angular/material modules */
const MATERIAL = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatCheckboxModule,
  MatRadioModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatCardModule,
  MatMenuModule,
  MatSnackBarModule
];

@NgModule({
  imports: [CommonModule, MATERIAL, RouterModule.forChild(routes)],
  declarations: [NetServiceConfigComponent]
})
export class NetServiceConfigModule {}
