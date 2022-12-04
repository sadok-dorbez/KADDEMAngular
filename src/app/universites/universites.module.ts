import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversitesRoutingModule } from './universites-routing.module';
import { UniversitesComponent } from './universites.component';
import { FormsModule } from '@angular/forms';
import { CreateUniversiteComponent } from './create-universite/create-universite.component';
import { DetailsUniversiteComponent } from './details-universite/details-universite.component';
import { ListDepartmentComponent } from '../departments/list-department/list-department.component';
import { ListUniversiteComponent } from './list-universite/list-universite.component';


@NgModule({
  declarations: [
    UniversitesComponent,
    CreateUniversiteComponent,
    DetailsUniversiteComponent,
   ListUniversiteComponent
  ],
  imports: [CommonModule, UniversitesRoutingModule, FormsModule],
})
export class UniversitesModule { }
