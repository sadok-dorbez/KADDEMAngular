import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../Model/Etudiant';

@Injectable({
  providedIn: 'root',
})
export class EtudiantService {
  public uri = 'http://localhost:8086/kaddem/etudiant';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  getAllEtudiant() {
    return this.http.get<Etudiant[]>(this.uri + '/getAllEtudaints');
  }
  addEtudiant(e: Etudiant) {
    //console.log('c:==================> ', c);
    return this.http.post(this.uri + '/addEtudaint', e);
  }

  updateEtudiant(e: Etudiant, id: any): Observable<Object> {
    return this.http.put<Etudiant>(this.uri + '/put' + id, e);
  }

  getEtudiantById(id: number) {
    return this.http.get<Etudiant>(this.uri + `/getbyid/${id}`);
  }

  deleteEtudiant(id: number): Observable<Object> {
    return this.http.delete(this.uri + `/delete/${id}`);
  }

  sendEmailToEtudiant(id: Number) {
    return this.http.get<Etudiant>(this.uri + '/notifieretudiant/' + id);
  }

  exportExcelExperiences(): Observable<Blob> {
    return this.http.get(
      'http://localhost:8086/kaddem/etudiant/listetudiantexcel',
      {
        responseType: 'blob',
      }
    );
  }
}
