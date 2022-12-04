import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/core/Model/Department';
import { Etudiant } from 'src/app/core/Model/Etudiant';

import { DepartmentService } from 'src/app/core/services/department.service';
@Component({
  selector: 'app-details-department',
  templateUrl: './details-department.component.html',
  styleUrls: ['./details-department.component.css']
})
export class DetailsDepartmentComponent implements OnInit {
  idDepart:any;
  constructor(private departmentserivce: DepartmentService)  { }
   currentDepartment: Department ={
    idDepart: 0,
    nomDepart: "",
    code: "",
    type: "",
    universites:{nomUni:""},
   
    description:""
   
  };
  public list :  Department[];
  listDepartment:Department;
  departements: Department[];
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
    this.currentDepartment = { idDepart: 0,
      nomDepart: "",
      code: "",
      type: "",
 
  universites:{nomUni:""},
    description:""
  };
    this.currentIndex = -1;
  }

  setActiveTutorial(departement: Department, index: number): void {
    this.currentDepartment = departement;
    this.currentIndex = index;
  }
 
  
  }
  
 
