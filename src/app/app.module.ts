import { APP_ROUTING } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { WpfConfigComponent } from './components/wpf-config/wpf-config.component';
import { AngularConfigComponent } from './components/angular-config/angular-config.component';
import { ProjectNotFoundComponent } from './components/project-not-found/project-not-found.component';

const MATERIAL = [MatToolbarModule, MatButtonModule, MatSidenavModule, BrowserAnimationsModule, MatListModule];
@NgModule({
  declarations: [AppComponent, ProjectListComponent, WpfConfigComponent, AngularConfigComponent, ProjectNotFoundComponent],
  imports: [BrowserModule, MATERIAL, APP_ROUTING],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
