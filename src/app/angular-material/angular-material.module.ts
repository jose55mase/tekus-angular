import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  imports: [
    MatTableModule,MatMenuModule,MatButtonModule,MatPaginatorModule,
    MatIconModule
  ],
  exports: [
    MatTableModule,MatMenuModule,MatButtonModule,MatPaginatorModule,
    MatIconModule
  ]
})
export class AngularMaterialModule { }