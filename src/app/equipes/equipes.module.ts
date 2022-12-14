import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EquipesRoutingModule } from './equipes-routing.module';
import { EquipesComponent } from './equipes.component';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';
import { ListEquipesComponent } from './list-equipes/list-equipes.component';

@NgModule({
  declarations: [EquipesComponent, ListEquipesComponent, FormEquipeComponent],
  imports: [CommonModule, EquipesRoutingModule, FormsModule],
})
export class EquipesModule {}
