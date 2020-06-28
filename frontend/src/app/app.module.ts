import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent, AppListDialogComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ListComponent,
    CreateComponent,
    StudentDetailComponent,
    AppListDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MaterialModule,
    BrowserAnimationsModule, RouterModule, FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents:[StudentDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
