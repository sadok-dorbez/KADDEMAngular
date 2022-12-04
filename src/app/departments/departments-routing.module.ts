import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { DepartmentsComponent } from './departments.component';
import { DetailsDepartmentComponent } from './details-department/details-department.component';
import { ListDepartmentComponent } from './list-department/list-department.component';

const routes: Routes = [{ path: '', component: DepartmentsComponent },
{path: "Department", component:DetailsDepartmentComponent},
  {path:"Department/list", component:ListDepartmentComponent},
  {path:"Department/add", component:CreateDepartmentComponent},
  { path: '', redirectTo: 'putDepartement', pathMatch: 'full' },
  { path: "Department/putDepartement/:id", component:CreateDepartmentComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
