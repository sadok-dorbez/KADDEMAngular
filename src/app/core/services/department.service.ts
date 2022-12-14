import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Departement } from '../Model/Department';
import { Etudiant } from '../Model/Etudiant';
import { Universite } from '../Model/Universite';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
 private url='http://localhost:8086/kaddem';
  allUniversites: Universite[];
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json'
    })
  }
  constructor(private http : HttpClient) { }



  getAlldep() {
    return this.http.get<Departement[]>(this.url + `/getallDepartement`,this.httpOptions);
  }
  getAllUniv() {
    return this.http.get<Universite[]>(this.url + `/getUniversiteee`,this.httpOptions);
  }
get(path: string) {
  return this.http.get(this.url + path);
}

addDepartment(departement:Departement): Observable<Object> {
    return this.http.post<Object>( this.url+ `/addDepartement/`,departement);
  }

  addDeparttouni(id: any,data:{
    nomDepartement:string;
    type:string;
    code:string;
    description:string;
  }): Observable<Departement> {
    return this.http.post<Departement>(this.url +'/addnewDepartToUniv/'+id, data)
  }
  getEtudiantDep(idDepartement: any): Observable<Etudiant> {
    return this.http.get<Etudiant>(this.url + `/getDepartmentUniversite/${idDepartement}`,this.httpOptions);
  }

  //updateDepartment(idDepart: number,department: department): Observable<Object> {
    //return this.http.put(this.url + `/putDep/${idDepart}`, department);
 // }
   getUniversites() : Observable<Universite[]>{
  return this.http.get<Universite[]>(this.url + '/getallUniversite', this.httpOptions)
}


  deleteDepartment(idDepartement: number): Observable<Object> {
    return this.http.delete(this.url + `/deleteDepartement/${idDepartement}`,this.httpOptions);
  }
  getDepartmentById(idDepartement: number): Observable<Departement> {
    return this.http.get<Departement>(this.url + `/getDepart/${idDepartement}`,this.httpOptions);
  }

  updateDepartment(department: Departement): Observable<any> {
    return this.http.put<Departement>(this.url + `/putDepatement/`,department,this.httpOptions);
  }
  exportPDF(): Observable<any> {
    return this.http.get<Departement>(this.url + `/pdfDownload`, {
      responseType: 'blob' as 'json'});
  }
  Getdepart (nomUniversite:String){
    return this.http.get<Departement>(this.url + `/getdepartbyUniv/${nomUniversite}`,this.httpOptions);}


    getDepartmentByIdList(idDepartement: number): Observable<any[]> {
      return this.http.get<any[]>(this.url + `/getDepart/${idDepartement}`,this.httpOptions);
    }

    getDepartmentByIdUniv(nomUniversite: String): Observable<Departement[]> {
      return this.http.get<Departement[]>(this.url + `/getDepartmentUniversite/${nomUniversite}`,this.httpOptions);
    }



    updateDepart(idDepartement: number,department: Departement): Observable<any> {
      return this.http.put(this.url + `/updateDepartement/${idDepartement}`,department,this.httpOptions
      );
    }

}
