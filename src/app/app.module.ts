import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { SuscriberListComponent } from './modules/suscriber-module/suscriber-list/suscriber-list.component';
import { SuscriberCreateupdateComponent } from './modules/suscriber-module/suscriber-createupdate/suscriber-createupdate.component';
import { SuscriberModule } from './modules/suscriber-module/suscriber.module';
import { SuscriberPegeComponent } from './pages/suscriber-pege/suscriber-pege.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './modules/login-module/login/login.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    SuscriberPegeComponent,
    AppComponent,SuscriberListComponent,SuscriberCreateupdateComponent, LoginComponent, LoginPageComponent,
  ],
  imports: [
    BrowserModule,AppRoutingModule,BrowserAnimationsModule, FormsModule,
    AngularMaterialModule,SuscriberModule,HttpClientModule,  ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
