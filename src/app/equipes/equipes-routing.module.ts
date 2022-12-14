import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipesComponent } from './equipes.component';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';
import { ListEquipesComponent } from './list-equipes/list-equipes.component';

const routes: Routes = [
  { path: '', component: EquipesComponent },
  { path: 'EquipesList', component: ListEquipesComponent },
  { path: 'FormEquipe/:id', component: FormEquipeComponent },
  { path: 'FormEquipe', component: FormEquipeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipesRoutingModule {}
