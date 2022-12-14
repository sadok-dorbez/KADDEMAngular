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
  url: string = 'http://localhost:8086/kaddem';


  allUni(): Observable<any> {
    return this.http.get(this.url + `/getallUniversite`);
  }
  addUniv(universite: Universite){
    return this.http.post(`${this.url}/addUniversite/`, universite);
  }

 deleteUni(idUniversite: number): Observable<Object> {
    return this.http.delete(this.url + `/deleteUniversite/${idUniversite}`);
  }
  getUniversiteById(idUniversite: number): Observable<Universite> {
    return this.http.get<Universite>(this.url + `/universite/${idUniversite}`);
  }
  updateUni(universite: Universite ): Observable<Universite> {
    return this.http.put<Universite>(this.url + `/updateUniversite/`,universite );
  }


}
