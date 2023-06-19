import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogRef } from '@angular/material/dialog';

@NgModule({
  declarations: [
    //LoginComponent
  ],
  imports: [
    CommonModule,AngularMaterialModule,FormsModule,ReactiveFormsModule,
    BrowserModule,
    //AngularMaterialModule
  ],
  
})
export class SuscriberModule { }