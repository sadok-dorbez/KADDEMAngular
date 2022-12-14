import { Component,EventEmitter,  OnInit, Output } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from 'src/app/core/Model/Universite';
import { UniversiteService } from 'src/app/core/services/universite.service';


@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.css']
})
export class ListUniversiteComponent implements OnInit {
  Universites: Universite[];
  listUniversites :any ;
  title = 'pagination';
  page: number = 1;
  count: number = 0;
  tableSize: number = 1;
  tableSizes: any = [1, 2, 15, 20];
 
  constructor(private universiteservice:UniversiteService,private router: Router,private uss: ActivatedRoute) { }
  
 
    ngOnInit(): void {
      this.allUni();
     }
    
     allUni() {
      this.universiteservice.allUni().subscribe((res) => {
        this.listUniversites = res;
      });
    }
    updateUniversite(idUniversite: number) {
      this.router.navigate(['/universites/universite/putUni', idUniversite]);
    }
  
    
    deleteUniv(idUniversite: number) {
      this.universiteservice.deleteUni(idUniversite).subscribe((data) => {
        console.log(data);
        this.allUni();
      });
    }
    
    toadd(){
      this.router.navigate(['/universites/universite/add'])
    } 
    postList(): void {
      this.universiteservice.allUni().subscribe((data: Universite[]) => {
        this. listUniversites= data;
      });
    }
    onTableDataChange(event: any): void {
      this.page = event
      this.postList();
    }
    
    onTableSizeChange(event: any){
      this.tableSize = event.target.value;
      this.page = 1;
      this.postList();
    }
    
    
  }
 
  


