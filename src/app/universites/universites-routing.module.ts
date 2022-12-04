import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsDepartmentComponent } from '../departments/details-department/details-department.component';
import { ListDepartmentComponent } from '../departments/list-department/list-department.component';
import { CreateUniversiteComponent } from './create-universite/create-universite.component';
import { DetailsUniversiteComponent } from './details-universite/details-universite.component';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { UniversitesComponent } from './universites.component';

const routes: Routes = [{ path: '', component: UniversitesComponent },
{path:"universite", component:ListUniversiteComponent},
{path:"universite/list", component:DetailsUniversiteComponent},
  {path:"universite/add", component:CreateUniversiteComponent},
  
  { path: '', redirectTo: '/putUni/', pathMatch: 'full' },
  { path: "universite/putUni/:id", component:CreateUniversiteComponent},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversitesRoutingModule { }
