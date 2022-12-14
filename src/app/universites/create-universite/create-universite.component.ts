import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Universite } from 'src/app/core/Model/Universite';
import {UniversiteService}from 'src/app/core/services/universite.service'


@Component({
  selector: 'app-create-universite',
  templateUrl: './create-universite.component.html',
  styleUrls: ['./create-universite.component.css']
})
export class CreateUniversiteComponent implements OnInit {

  listUniversite: Universite[];
action:String;
universite: Universite;
public loginForm: FormGroup;
  constructor(
    private universiteservice: UniversiteService,
    private currentRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,


  ) {}

  ngOnInit(): void {

    this.universite = new Universite();
    let id = this.currentRoute.snapshot.params['id'];
    if (id != null) {
      //update
      this.action = 'Update';
      this.universiteservice.getUniversiteById(id).subscribe((data: Universite) => {

        this.universite = data;
      });
      console.log('=================>' + this.universite);
    } else {
      //add
      this.action = 'Add';
      this.universite = new Universite();

    }

    //get
    this.universiteservice.allUni().subscribe((data: Universite[]) => {
      this.listUniversite = data;
    });
  }

  //add|update
  add() {
    if (this.action == 'update') {

      this.universiteservice

        .updateUni(this.universite)
        .subscribe(() => console.log('complete'));

    } else {

      console.log('this.universite:', this.universite);

      this.universiteservice.addUniv(this.universite).subscribe((result) => {
        this.goToDepartmentList();

        if (result) {


          this.listUniversite = [this.universite, ...this.listUniversite];

          location.reload();
        }
      });
    }



  }

  //delete
  delete() {
    this.universiteservice.deleteUni(this.universite.idUniversite);

  }
  //navigate
  goToDepartmentList() {
    this.router.navigate(['/universites/universite/list']);
  }
}

