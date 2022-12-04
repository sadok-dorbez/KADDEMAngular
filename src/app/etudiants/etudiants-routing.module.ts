import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantsComponent } from './etudiants.component';
import { FormEtudiantComponent } from './form-etudiant/form-etudiant.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';

const routes: Routes = [{ path: '', component: EtudiantsComponent },
{ path: 'EtudiantList', component: ListEtudiantComponent },
{ path: 'FormEtudiant', component: FormEtudiantComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantsRoutingModule { }
