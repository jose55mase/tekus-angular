import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { SuscriberListComponent } from './modules/suscriber-module/suscriber-list/suscriber-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SuscriberListComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
