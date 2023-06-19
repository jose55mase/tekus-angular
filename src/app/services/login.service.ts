import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SuscriberGetModel, SuscriberPostModel } from '../models/suscriber.model';
import { ResponseModel } from '../models/respose.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private URI: string;
  constructor(private http: HttpClient) { 
    this.URI = `${environment.apiUrl}`
  }

  public loginToken(data): Observable<any> {   
    return this.http.post<any>(`${this.URI}/account/login`, data)
  }

}