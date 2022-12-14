import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/core/Model/Etudiant';
import { EtudiantService } from 'src/app/core/services/etudiant.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css'],
})
export class ListEtudiantComponent implements OnInit {
  etudiant: Etudiant;
  etudiantList: Etudiant[];
  UserImage: string;
  fileName = 'ExcelSheet.xlsx';

  constructor(
    private etudiantService: EtudiantService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.etudiant = new Etudiant();

    //getEtudiants
    this.etudiantService.getAllEtudiant().subscribe((data: Etudiant[]) => {
      console.log(data);
      this.etudiantList = data;
      this.UserImage = 'data:image/jpeg;base64,' + this.etudiantList[0].photo;
      //this.setImageToStudent();
    });
  }
  setImageToStudent() {
    this.etudiantList.forEach((etudiant) => {
      //this.UserImage = 'data:image/jpeg;base64,' + this.etudiant.photo;
      etudiant.photo = this.UserImage;
    });
  }
  delete(id: number) {
    this.etudiantService.deleteEtudiant(id).subscribe((data) => {
      console.log(data);
      this.etudiantService.getAllEtudiant();
      location.reload();
    });
  }
  update(id: number) {
    this.route.navigate(['/etudiants/FormEtudiant/', id]);
  }

  sendMail(id: number) {
    this.etudiantService
      .sendEmailToEtudiant(id)
      .subscribe(() => console.log('complete'));
  }

  //Exportation excel front

  exportexcel(): void {
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Liste des Etudiants');

    XLSX.writeFile(wb, this.fileName);
  }

  //Exportation excel back pas meme version

  exportExperienceExcel() {
    this.etudiantService.exportExcelExperiences().subscribe((x) => {
      const blob = new Blob([x], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      const n = window.navigator as any;
      if (n.msSaveOrOpenBlob) {
        n.msSaveOrOpenBlob(blob);
        return;
      }
      const data = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = data;
      link.download = 'Etudiant.xlsx';
      link.dispatchEvent(
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window,
        })
      );

      setTimeout(function () {
        window.URL.revokeObjectURL(data);
        link.remove();
      }, 100);
    });
  }
}
