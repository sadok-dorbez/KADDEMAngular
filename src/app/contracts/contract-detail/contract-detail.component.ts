import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contrat } from 'src/app/core/Model/Contrat';
import { ContratService } from 'src/app/core/services/contrat.service';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']
})
export class ContractDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private contratService: ContratService
  ) {}
  id: number;
  contrat: Contrat;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.contrat = new Contrat();
    this.contratService.getContratById(this.id).subscribe((data: Contrat) => {
      this.contrat = data;
    });
  }
}
