import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/core/Model/Department';
import { Universite } from 'src/app/core/Model/Universite';
import { DepartmentService } from 'src/app/core/services/department.service';


@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {
  listdepartments: Department[];
action:String;
nomUni:any;
department: Department=new Department();

  constructor(private departmentserivce: DepartmentService, private router: Router,  private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.department.universites = {nomUni:null};
    
    this.department = new Department();
    let id = this.currentRoute.snapshot.params['id'];
    if (id != null) {
      //update
      this.action = 'update';
      this.departmentserivce.getDepartmentByIdUniv(this.nomUni).subscribe((data:Department[]) => {
        
        this.department.universites.nomUni= data;
      });
      console.log('=================>' + this.department);
      this.goToDepartmentList
    } else {
      //add
      this.action = 'add new';
      this.department = new Department();
      this.goToDepartmentList
    }

    //get
    this.departmentserivce.getDepartmentByIdUniv(this.nomUni).subscribe((data: Department[]) => {
      this.listdepartments = data;
    });
  }

  //add|update
  add() {
    if (this.action == 'update') {
      this.departmentserivce
        .updateDepartment(this.department)
        .subscribe(() => console.log('complete'));
    } else {
    
      console.log('this.department:', this.department);
      this.departmentserivce.addDepartment(this.department).subscribe((result) => {
        if (result) {
          this.router.navigate(['/departments/Department/list'])
          this.listdepartments = [this.department, ...this.listdepartments];
          location.reload();
        }
      });
    }
    
  }

  //delete
  delete() {
    this.departmentserivce.deleteDepartment(this.department.idDepart);
  }
  //navigate
  goToDepartmentList() {
    this.router.navigate(['/Department']);
  }
}


