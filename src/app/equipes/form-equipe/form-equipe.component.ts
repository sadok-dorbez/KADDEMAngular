import { Component, OnInit } from '@angular/core';
import { Equipe } from '../../core/Model/Equipe';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Niveau } from '../../core/Model/Niveau';
import { EquipesService } from '../../core/services/equipes.service';
import { DetailsEquipe } from '../../core/Model/DetailsEquipe';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-equipe',
  templateUrl: './form-equipe.component.html',
  styleUrls: ['./form-equipe.component.css'],
})
export class FormEquipeComponent implements OnInit {
  Equipe: Equipe;
  action: string;
  equipeList: Equipe[];
  EquipeForm: FormGroup;
  id: any;
  constructor(
    private equipeService: EquipesService,
    private route: Router,
    private currentRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Equipe = new Equipe();
    this.id = this.currentRoute.snapshot.params['id'];
    if (this.id != null) {
      //update
      this.action = 'Update';
      this.equipeService.getEquipeById(this.id).subscribe((data: Equipe) => {
        this.Equipe = data;
      });
    } else {
      //add
      this.action = 'Add new';
      this.Equipe = new Equipe();
    }

    //get
    this.equipeService.getAllEquipe().subscribe((data: Equipe[]) => {
      this.equipeList = data;
    });
    console.log();
  }

  //add|update
  add() {
    if (this.action == 'update') {
      this.equipeService
        .updateEquipe(this.Equipe, this.id)
        .subscribe(() => console.log('complete'));
      location.reload();
    } else {
      console.log('this.equipe:', this.Equipe);
      this.equipeService.addEquipe(this.Equipe).subscribe((result) => {
        if (result) {
          this.route.navigate(['/equipes/EquipesList']);
          this.equipeList = [this.Equipe, ...this.equipeList];
        }
      });
    }
  }

  //delete
  delete() {
    this.equipeService.deleteEquipe(this.Equipe.idEquipe);
  }

  //navigate
  goToEtudiantList() {
    this.route.navigate(['/equipes/EquipesList']);
  }
}
