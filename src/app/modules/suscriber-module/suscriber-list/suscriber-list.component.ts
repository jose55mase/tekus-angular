import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ResponseModel } from 'src/app/models/respose.model';
import { SuscriberGetModel } from 'src/app/models/suscriber.model';
import { SuscriberService } from 'src/app/services/suscriber.service';
import { SuscriberCreateupdateComponent } from '../suscriber-createupdate/suscriber-createupdate.component';
import Swal from 'sweetalert2';
import { btnsApp, deleteItem } from 'src/app/commos/global-text';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-suscriber-list',
  templateUrl: './suscriber-list.component.html',
  styleUrls: ['./suscriber-list.component.scss'],
  providers: [SuscriberService],
})
export class SuscriberListComponent implements OnInit {

  //@ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['Id','Name','Email','CountryName','PhoneNumber','Action'];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator; 
  public data: any;//SuscriberGetModel;
  private token: string;

  constructor( private suscriberService: SuscriberService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getSuscriberList();
  }
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.data.filter = filterValue;    
  }

  public async getSuscriberList()  {
    const token = JSON.parse(sessionStorage.getItem("objectTekus_token"));
    this.suscriberService.getAllService(token).subscribe(
      (response:ResponseModel) => {        
        this.data = new MatTableDataSource(response.Data)
        this.data.paginator = this.paginator = this.paginator
        this.data.applyFilter = this.applyFilter;
        this.paginator._intl.itemsPerPageLabel = 'Registros por pagina';
        this.paginator._intl.firstPageLabel = 'Primera pagina';
        this.paginator._intl.lastPageLabel = 'Ultima pagina';
        this.paginator._intl.nextPageLabel = 'Pagina adelante';
        this.paginator._intl.previousPageLabel = 'Pagina atras';
      },
      (error) => { 
        console.log("Response: ", error)
        Swal.fire( "502 " ,  "Valida con el administrador" ,  "error" )
      }
    )  
  }

  public editSuscriber(data: any) {
    sessionStorage.setItem("objectTekus_suscriber", JSON.stringify(data));
    const dialogRef = this.dialog.open(SuscriberCreateupdateComponent, {
      height: '450px',
      width: '400px'
    });

  }

  public deleteSuscriber(data: any) {
    const token = JSON.parse(sessionStorage.getItem("objectTekus_token"));
    Swal.fire({
      title: `${deleteItem.delete}`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `${btnsApp.ok}`,
      denyButtonText: `${btnsApp.cancel}`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.suscriberService.delete(data,token).subscribe(
          (response) => {   
            Swal.fire(`${deleteItem.confir}`, '', 'success')     
          },
          (error) => { 
            Swal.fire( "502 " ,  `${deleteItem.error}` ,  "error" )
          
          }
        )
      } else if (result.isDenied) {
        Swal.fire(`${deleteItem.cancel}`, '', 'info')
      }
    })
  }



}
