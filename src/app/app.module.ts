import { IN_MEMORY_DB } from './storage/in-memory.imort';
import { APP_ROUTING } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { WpfConfigComponent } from './components/wpf-config/wpf-config.component';
import { AngularConfigComponent } from './components/angular-config/angular-config.component';
import { ProjectNotFoundComponent } from './components/project-not-found/project-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

/** Used @angular/material modules */
const MATERIAL = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  BrowserAnimationsModule,
  MatListModule,
  MatCheckboxModule,
  MatRadioModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatCardModule
];

/** Used custom components */
const COMPONENTS = [AppComponent, ProjectListComponent, WpfConfigComponent, AngularConfigComponent, ProjectNotFoundComponent];

/** Used angular modules */
const ANGULAR = [BrowserModule, ReactiveFormsModule, HttpClientModule];
@NgModule({
  declarations: [COMPONENTS],
  imports: [ANGULAR, IN_MEMORY_DB, MATERIAL, APP_ROUTING],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
