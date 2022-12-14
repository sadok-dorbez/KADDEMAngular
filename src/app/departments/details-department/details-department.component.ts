import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/app/core/Model/Department';
import { Etudiant } from 'src/app/core/Model/Etudiant';

import { DepartmentService } from 'src/app/core/services/department.service';
@Component({
  selector: 'app-details-department',
  templateUrl: './details-department.component.html',
  styleUrls: ['./details-department.component.css']
})
export class DetailsDepartmentComponent implements OnInit {
  idDepartement:any;
  constructor(private departmentserivce: DepartmentService)  { }
  
  public list :  Departement[];
  listDepartment:Departement;
  departements: Departement[];
  departmentList:any
  currentIndex = -1;
  nomDepart=""
  ngOnInit(): void {
    this.retriveDepartments();
  }
  retriveDepartments():void{
    this.departmentserivce.getAlldep().subscribe({
      next:(data)=>{
        this.departements=data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
  refreshList(): void {
    this.retriveDepartments();
   
    this.currentIndex = -1;
  }

  setActiveTutorial(departement: Departement, index: number): void {

    this.currentIndex = index;
  }
 
  
  }
  
 
