import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suscriber-pege',
  templateUrl: './suscriber-pege.component.html',
  styleUrls: ['./suscriber-pege.component.scss']
})
export class SuscriberPegeComponent implements OnInit {

  public showComponent: string = "list";
  constructor() { }

  ngOnInit(): void {
  }


  public crud() {
    console.log(this.showComponent);
    switch (this.showComponent) {
      case "list":
        this.showComponent = "create";
        sessionStorage.removeItem("objectTekus_suscriber")
        break;
      case "create":
        this.showComponent ="list";
        break;     
      default:
        break;
    }
  }

}
