import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { ContractsComponent } from './contracts.component';
import { ContractFormComponent } from './contract-form/contract-form.component';
import { ContractDetailComponent } from './contract-detail/contract-detail.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContractsComponent,
    ContractFormComponent,
    ContractDetailComponent,
    ContractListComponent,
  ],
  imports: [CommonModule, ContractsRoutingModule, FormsModule],
})
export class ContractsModule {}
