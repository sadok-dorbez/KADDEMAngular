import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Universite } from '../Model/Universite';
@Injectable({
  providedIn: 'root',
})
export class UniversiteService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http : HttpClient) { }
  url: string = 'http://localhost:8088/Spring';


  allUni(): Observable<any> {
    return this.http.get(this.url + `/allUni`);
  }
  addUniv(universite: Universite){
    return this.http.post(`${this.url}/addUni`, universite);
  }
 
 deleteUni(idUni: number): Observable<Object> {
    return this.http.delete(this.url + `/delUni/${idUni}`);
  }
  getUniversiteById(idUni: number): Observable<Universite> {
    return this.http.get<Universite>(this.url + `/universite/${idUni}`);
  } 
  updateUni(universite: Universite ): Observable<Universite> {
    return this.http.put<Universite>(this.url + `/putUni/`,universite );
  }
  
  
}
