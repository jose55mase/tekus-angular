import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ResponseModel } from 'src/app/models/respose.model';
import { SuscriberGetModel } from 'src/app/models/suscriber.model';
import { SuscriberService } from 'src/app/services/suscriber.service';


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
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator; 
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  public data: any;//SuscriberGetModel;
  private token: string;

  constructor( private suscriberService: SuscriberService ) { }

  ngOnInit(): void {
    this.getSuscriberList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  //TODO: remover o cambiar
  displayedColumns: string[] = ['Id','Name','Email','CountryName','PhoneNumber','Action'];
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.data.filter = filterValue;    
  }

  public async getSuscriberList()  {
    await this.suscriberService.getToken(
      {
        "UserName": "patata",
        "Password": "MrPotat0"
      }
    ).subscribe((response) => 
      {
        this.suscriberService.getAllService(response.Token).subscribe(
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
          //(error) => { Swal.fire( "502 " ,  "Valida con el administrador" ,  "error" ) }
        )
        
      }    
    )

   
  }


}
