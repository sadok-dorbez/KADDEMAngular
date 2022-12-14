import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from '../Model/Equipe';

@Injectable({
  providedIn: 'root',
})
export class EquipesService {
  public uri = 'http://localhost:8086/kaddem/Equipe';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  getAllEquipe() {
    return this.http.get<Equipe[]>(this.uri + '/getAllEquipe');
  }
  addEquipe(e: Equipe) {
    //console.log('c:==================> ', c);
    return this.http.post(this.uri + '/addEquipe', e);
  }

  updateEquipe(e: Equipe, id: any): Observable<Object> {
    return this.http.put<Equipe>(this.uri + '/put' + id, e);
  }

  getEquipeById(id: number) {
    return this.http.get<Equipe>(this.uri + `/getEquipeById/${id}`);
  }

  deleteEquipe(id: number): Observable<Object> {
    return this.http.delete(this.uri + `/deleteEquipe/${id}`);
  }

  exportExcelEquipes(): Observable<Blob> {
    return this.http.get(
      'http://localhost:8086/kaddem/Equipe/download/equipes.xlsx',
      {
        responseType: 'blob',
      }
    );
  }
}
