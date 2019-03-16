import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule, 
  MatFormFieldModule, 
  MatSidenavModule,
  MatListModule,
  MatInputModule, 
  MatOptionModule, 
  MatSelectModule, 
  MatIconModule, 
  MatButtonModule, 
  MatCardModule, 
  MatTableModule, 
  MatDividerModule, 
  MatSnackBarModule } from '@angular/material';

import { ConnectServService } from './connect-serv.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule
  ],
  providers: [ConnectServService],
  bootstrap: [AppComponent]
})

export class AppModule { }
