import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/core/Model/Department';
import { Universite } from 'src/app/core/Model/Universite';
import { DepartmentService } from 'src/app/core/services/department.service';


@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {
  listdepartments: Departement[];
  action:String;
  departement: Departement=new Departement();
  listuniversites:Universite[]
  idUniversite:any;
  value:any


// universites: Universite = new Universite();
  constructor(private departmentserivce: DepartmentService, private router: Router,  private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {

      //this.departmentserivce.getAllUniv().subscribe(response =>this.listuniversites=response)
    this.getUniversites();
    }

  //add|update
  add(form:NgForm) {
      console.log(form.value)
      let obj : any = {}
      obj.nomDepartement = form.value.nomDepartement;
      obj.type = form.value.type;
      obj.code = form.value.Code;
      obj.description = form.value.description;
      this.departmentserivce.addDeparttouni(this.idUniversite,obj).subscribe((res:any) =>{
          console.log(res)

      })
    this.goToDepartmentList();
    }

  changeidUniversite(input:any): void {

    this.idUniversite=input.target.value;

    // console.log("id uni " ,input.target.value);
  }

  getUniversites(){
    this.departmentserivce.getUniversites().subscribe(
    (data) => {
      this.listuniversites = data;
      console.log(this.listuniversites);
    });
}

  //delete
  delete() {
    this.departmentserivce.deleteDepartment(this.departement.idDepartement);
  }
  //navigate
  goToDepartmentList() {
    this.router.navigate(['/departments/Department']);
  }

}
