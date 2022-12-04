import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import { Contrat } from '../../core/Model/Contrat';
import { ContratService } from '../../core/services/contrat.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  @ViewChild('content', { static: false }) el!: ElementRef;

  constructor(private contratService: ContratService) {}
  contrat: Contrat;

  contratList: Contrat[];
  ngOnInit(): void {
    this.contrat = new Contrat();
    //getContracts
    this.contratService.getAllContrat().subscribe((data: Contrat[]) => {
      this.contratList = data;
    });
  }

  //addContract
  add() {
    this.contratService
      .addContrat(this.contrat)
      .subscribe(
        () => (this.contratList = [this.contrat, ...this.contratList])
      );
  }
  //deleteContract
  delete(id: number) {
    this.contratService.deleteContrat(id).subscribe((data) => {
      console.log(data);
      this.contratService.getAllContrat();
      location.reload();
    });
  }
  //updateContract
  update() {}

  //generate pdf
  makePDF() {
    
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save('contrat.pdf');
      },
    });
  }

}
