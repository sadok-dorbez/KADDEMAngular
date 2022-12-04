import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Department } from '../Model/Department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http : HttpClient) { }
  url: string = 'http://localhost:8088/Spring';


  getAlldep() {
    return this.http.get<Department[]>(this.url + `/getD`);
  }
  addDepartment(department: Department): Observable<Object> {
    return this.http.post(this.url + `/addDep`, department);
  }
  //updateDepartment(idDepart: number,department: department): Observable<Object> {
    //return this.http.put(this.url + `/putDep/${idDepart}`, department);
 // }
 
  deleteDepartment(idDepart: number): Observable<Object> {
    return this.http.delete(this.url + `/delDep/${idDepart}`);
  }
  getDepartmentById(idDepart: number): Observable<Department> {
    return this.http.get<Department>(this.url + `/department/${idDepart}`);
  } 
 
  updateDepartment(department: Department): Observable<any> {
    return this.http.put<Department>(this.url + `/putDepatement/`,department);
  }
  exportPDF(): Observable<any> {
    return this.http.get<Department>(this.url + `/pdfDownload`, {
      responseType: 'blob' as 'json'});
  }
  Getdepart (nomUni:String){
    return this.http.get<Department>(this.url + `/getdepartbyUniv/${nomUni}`);}


    getDepartmentByIdList(idDepart: number): Observable<any[]> {
      return this.http.get<any[]>(this.url + `/department/${idDepart}`);
    } 
   
    getDepartmentByIdUniv(nomUni: String): Observable<any[]> {
      return this.http.get<any[]>(this.url + `/getIDU/${nomUni}`);
    } 
    getUniversite(idUni: any): Observable<any> {
      return of({
        idUni: 1,
      });
    }
    updateDepart(idDepart: number,department: Department): Observable<any> {
      return this.http.put(this.url + `/putDep/${idDepart}`,department
      );
    }
   
}