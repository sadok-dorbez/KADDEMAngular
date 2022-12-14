import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversitesRoutingModule } from './universites-routing.module';
import { UniversitesComponent } from './universites.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUniversiteComponent } from './create-universite/create-universite.component';
import { DetailsUniversiteComponent } from './details-universite/details-universite.component';
import { ListDepartmentComponent } from '../departments/list-department/list-department.component';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    UniversitesComponent,
    CreateUniversiteComponent,
    DetailsUniversiteComponent,
   ListUniversiteComponent,
   SearchComponent
  ],
  imports: [CommonModule, UniversitesRoutingModule, FormsModule, ReactiveFormsModule, NgxPaginationModule],
})
export class UniversitesModule { }
