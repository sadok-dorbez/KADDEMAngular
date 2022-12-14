import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipe } from 'src/app/core/Model/Equipe';
import { EquipesService } from 'src/app/core/services/equipes.service';
import * as XLSX from 'xlsx';
import { Etudiant } from '../../core/Model/Etudiant';
import { EtudiantService } from '../../core/services/etudiant.service';

@Component({
  selector: 'app-list-equipes',
  templateUrl: './list-equipes.component.html',
  styleUrls: ['./list-equipes.component.css'],
})
export class ListEquipesComponent implements OnInit {
  equipe: Equipe;
  equipeList: Equipe[];

  constructor(private equipesService: EquipesService, private route: Router) {}

  ngOnInit(): void {
    this.equipe = new Equipe();

    //getEtudiants
    this.equipesService.getAllEquipe().subscribe((data: Equipe[]) => {
      console.log(data);
      this.equipeList = data;
    });
  }
  delete(id: number) {
    this.equipesService.deleteEquipe(id).subscribe((data) => {
      console.log(data);
      this.equipesService.getAllEquipe();
      location.reload();
    });
  }
  update(id: number) {
    this.route.navigate(['/equipes/FormEquipe/', id]);
  }

  exportexel() {
    window.open('localhost:8086/kaddem/Equipe/download/equipes.xlsx', '_blank');
  }
}
