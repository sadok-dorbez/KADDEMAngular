import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EtudiantsRoutingModule } from './etudiants-routing.module';
import { EtudiantsComponent } from './etudiants.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { FormEtudiantComponent } from './form-etudiant/form-etudiant.component';


@NgModule({
  declarations: [
    EtudiantsComponent,
    ListEtudiantComponent,
    FormEtudiantComponent
  ],
  imports: [
    CommonModule,
    EtudiantsRoutingModule,
    FormsModule
  ]
})
export class EtudiantsModule { }
