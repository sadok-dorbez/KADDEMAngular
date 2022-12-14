import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/core/Model/Etudiant';
import { EtudiantService } from 'src/app/core/services/etudiant.service';

@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styleUrls: ['./form-etudiant.component.css'],
})
export class FormEtudiantComponent implements OnInit {
  etudiant: Etudiant;
  action: string;
  etudiantList: Etudiant[];
  StudentForm: FormGroup;
  id: any;
  constructor(
    private etudiantService: EtudiantService,
    private route: Router,
    private currentRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.etudiant = new Etudiant();
    this.id = this.currentRoute.snapshot.params['id'];
    if (this.id != null) {
      //update
      this.action = 'Update';
      this.etudiantService
        .getEtudiantById(this.id)
        .subscribe((data: Etudiant) => {
          this.etudiant = data;
        });
    } else {
      //add
      this.action = 'Add new';
      this.etudiant = new Etudiant();
    }

    //get
    this.etudiantService.getAllEtudiant().subscribe((data: Etudiant[]) => {
      this.etudiantList = data;
    });

    console.log();
  }

  //add|update
  add() {
    if (this.action == 'update') {
      this.etudiantService
        .updateEtudiant(this.etudiant, this.id)
        .subscribe(() => console.log('complete'));
      location.reload();
    } else {
      console.log('this.contrat:', this.etudiant);
      this.etudiantService.addEtudiant(this.etudiant).subscribe((result) => {
        if (result) {
          this.route.navigate(['/etudiants/EtudiantList']);
          this.etudiantList = [this.etudiant, ...this.etudiantList];
          //location.reload();
        }
      });
    }
  }

  //delete
  delete() {
    this.etudiantService.deleteEtudiant(this.etudiant.idEtudiant);
  }
  //navigate
  goToEtudiantList() {
    this.route.navigate(['/etudiants/EtudiantList']);
  }
}
