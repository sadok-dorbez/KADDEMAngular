import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/app/core/Model/Department';
import { Etudiant } from 'src/app/core/Model/Etudiant';
import { DepartmentService } from 'src/app/core/services/department.service';

@Component({
  selector: 'app-show-etudiants',
  templateUrl: './show-etudiants.component.html',
  styleUrls: ['./show-etudiants.component.css']
})
export class ShowEtudiantsComponent implements OnInit {
listetudiants:any;
departement: Departement=new Departement();

idDepartement:any;
  constructor( private departmentservice:DepartmentService) { }

  ngOnInit(): void {
    this.listetudiants = new Etudiant();
    }
    getEtudiantdep()
{this.departmentservice.getEtudiantDep(this.idDepartement).subscribe((data: Etudiant) => {
       
  this.listetudiants = data;
  }
  
)}
}

