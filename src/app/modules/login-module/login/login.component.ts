import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { session } from 'src/app/commos/global-text';
import { SuscriberGetModel, SuscriberPostModel, SuscriberPuttModel } from 'src/app/models/suscriber.model';
import { LoginService } from 'src/app/services/login.service';
import { SuscriberService } from 'src/app/services/suscriber.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public checkoutForm;
  private suscriptoreModel : SuscriberGetModel;
  objet: SuscriberPostModel;
  objetupdate: SuscriberPuttModel;

  constructor(
    private formBuilder: FormBuilder,
    private suscriberService: SuscriberService,
    private router: Router,
    private loginService: LoginService,
  ) {
        
    this.checkoutForm = this.formBuilder.group({      
      user: new FormControl('',Validators.compose([
        Validators.required,    
      ])),
      password: new FormControl('',Validators.compose([
        Validators.required,   
      ])), 
    });
    
  }

  ngOnInit(): void { }

  validate() { 
    const objet = { 
      UserName: this.checkoutForm.value.user,
      Password: this.checkoutForm.value.password
    }    
    this.loginService.loginToken(objet).subscribe(
      (response) =>  {
        Swal.fire( `${session.success}`, "",  "success" )
        sessionStorage.setItem("objectTekus_token", JSON.stringify(response.Token));
        this.router.navigate(['/suscriber']);
       },
      (error) =>  { 
        Swal.fire( `${session.credentialError}`, "",  "warning" )
      }
    );
  }

}
