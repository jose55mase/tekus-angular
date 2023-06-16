import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SuscriberGetModel } from '../models/suscriber.model';
import { ResponseModel } from '../models/respose.model';


@Injectable({
  providedIn: 'root'
})
export class SuscriberService {
  
  URI: string;
  constructor(private http: HttpClient) { 
    this.URI = `${environment.apiUrl}`
  }

  getAllService(token): Observable<ResponseModel> {   
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    });
    // TODO: Configurar token.
    //console.log("Tocken: ", token);
    return this.http.get<ResponseModel>(`${this.URI}/subscribers/`, { headers: headers })
  }

  getToken(data): Observable<any> {   
    return this.http.post<any>(`${this.URI}/account/login`,data)
  }


/*
  save(data): Observable<ModelSubjets> {   
    return this.http.post<ModelSubjets>(`${this.URI}/client/save`,data)
  }

  update(data): Observable<ModelSubjets> {   
    return this.http.post<ModelSubjets>(`${this.URI}/client/save`,data)
  }

  delete(data): Observable<ModelSubjets> {   
    return this.http.post<ModelSubjets>(`${this.URI}/client/delete`,data)
  }
  */
}