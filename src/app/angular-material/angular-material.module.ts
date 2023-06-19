import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';




@NgModule({
  imports: [
    MatTableModule,MatMenuModule,MatButtonModule,MatPaginatorModule,
    MatIconModule,MatTooltipModule,MatFormFieldModule,MatInputModule,
    MatDialogModule,
  ],
  exports: [
    MatTableModule,MatMenuModule,MatButtonModule,MatPaginatorModule,
    MatIconModule,MatTooltipModule,MatFormFieldModule,MatInputModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
 ],
})
export class AngularMaterialModule { }