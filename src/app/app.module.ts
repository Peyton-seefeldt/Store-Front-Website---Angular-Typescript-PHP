import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Add Angular material modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,  MatTooltipModule, MatRadioModule, MatIconModule, MatCheckboxModule, MatInputModule,
  MatFormFieldModule, MatSelectModule, MatDialogModule } from '@angular/material';
import { ScheduleComponent } from './schedule/schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,  MatTooltipModule, MatRadioModule, MatIconModule, MatCheckboxModule, MatInputModule,
  MatFormFieldModule, MatSelectModule, MatDialogModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
