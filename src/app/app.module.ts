import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

const MATERIAL = [MatToolbarModule, MatButtonModule, MatSidenavModule, BrowserAnimationsModule, MatListModule];
@NgModule({
  declarations: [AppComponent, ProjectListComponent],
  imports: [BrowserModule, MATERIAL],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
