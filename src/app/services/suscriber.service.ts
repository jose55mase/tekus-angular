import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SuscriberGetModel, SuscriberPostModel } from '../models/suscriber.model';
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
    return this.http.get<ResponseModel>(`${this.URI}/subscribers/`, { headers: headers })
  }

  save(data, token): Observable<SuscriberPostModel> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<SuscriberPostModel>(`${this.URI}/subscribers/`,data, { headers: headers })
  }

  update(data,token): Observable<SuscriberPostModel> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });  
    // TODO: Configurar token.
    //console.log("Tocken: ", token);
    return this.http.put<SuscriberPostModel>(`${this.URI}/subscribers/${data.Id}`,data, { headers: headers })
  }

  delete(data,token): Observable<number> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });  
    return this.http.delete<number>(`${this.URI}/subscribers/${data.Id}`, { headers: headers })
  }

}