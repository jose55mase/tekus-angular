import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createItem, updateItem } from 'src/app/commos/global-text';
import { SuscriberGetModel, SuscriberPostModel, SuscriberPuttModel } from 'src/app/models/suscriber.model';
import { SuscriberService } from 'src/app/services/suscriber.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-suscriber-createupdate',
  templateUrl: './suscriber-createupdate.component.html',
  styleUrls: ['./suscriber-createupdate.component.scss'],
  
  
})
export class SuscriberCreateupdateComponent implements OnInit {

  public checkoutForm;
  private suscriptoreModel : SuscriberGetModel;
  objet: SuscriberPostModel;
  objetupdate: SuscriberPuttModel;
  public btnUpDate : boolean = false;
  public btnSaveDate : boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private suscriberService: SuscriberService,
    public dialogRef: MatDialogRef<SuscriberCreateupdateComponent>,
    //@Inject(MAT_DIALOG_DATA) public data
  ) {
        
    this.checkoutForm = this.formBuilder.group({
      
      name: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30)      
      ])),  
      
      email: new FormControl('',Validators.compose([
        Validators.required,
        Validators.email,     
      ])), 

      phoneNumber: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(5)   
      ])),
      jobTitle: new FormControl(''),
      area: new FormControl(''),
    });
    if(JSON.parse(sessionStorage.getItem("objectTekus_suscriber")) != null){
      this.btnUpDate = true;
      this.suscriptoreModel = JSON.parse(sessionStorage.getItem("objectTekus_suscriber"))
      this.checkoutForm.controls['name'].setValue(this.suscriptoreModel.Name)
      this.checkoutForm.controls['email'].setValue(this.suscriptoreModel.Email)
      this.checkoutForm.controls['phoneNumber'].setValue(this.suscriptoreModel.PhoneNumber)
      this.checkoutForm.controls['jobTitle'].setValue(this.suscriptoreModel.JobTitle)
      this.checkoutForm.controls['area'].setValue(this.suscriptoreModel.Area)
    }else{
      this.btnSaveDate = true;
    }
  }

  ngOnInit(): void { }


  public savedata(){
    var idesData = Date.now()
    const token = JSON.parse(sessionStorage.getItem("objectTekus_token"));
    console.log("Valiate: ", this.checkoutForm )
    const objet = { "Subscribers": [ this.objet = {
        Name : this.checkoutForm.value.name,
        Area : this.checkoutForm.value.area,
        CountryCode: "CO",
        Email: this.checkoutForm.value.email,
        JobTitle: this.checkoutForm.value.jobTitle,
        PhoneNumber: this.checkoutForm.value.phoneNumber,
        Topics: ["Manzana", "Fresa"]
      }]
    };
    this.suscriberService.save(objet ,token).subscribe(
      (response) => {        
        Swal.fire( `${createItem.success}`, "",  "success" )
      },
      (error) => { Swal.fire( "502 " ,  `${createItem.error}` ,  "error" ) }
    )
  }

  public update(){
    const token = JSON.parse(sessionStorage.getItem("objectTekus_token"));
    this.objetupdate = {
      Id : this.suscriptoreModel.Id,
      Name : this.checkoutForm.value.name,
      Area : this.checkoutForm.value.area,
      CountryCode: "CO",
      Email: this.checkoutForm.value.email,
      JobTitle: this.checkoutForm.value.jobTitle,
      PhoneNumber: this.checkoutForm.value.phoneNumber,
      Topics: ["Manzana", "Fresa"]
    }
    this.suscriberService.update(this.objetupdate,token).subscribe(
      (response) => {        
        Swal.fire( `${updateItem.success}` ,"",  "success" )
        this.dialogRef.close();
      },
      (error) => { 
        Swal.fire( "502 " ,  `${updateItem.error}` ,  "error" )
        this.dialogRef.close();
      }
    )
   
  }

}
