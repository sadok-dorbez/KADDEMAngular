import { Component, OnInit } from '@angular/core';

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
  
 
  constructor(private universiteservice:UniversiteService,private router: Router,private uss: ActivatedRoute) { }

 
    ngOnInit(): void {
      this.allUni();
     }
    
     allUni() {
      this.universiteservice.allUni().subscribe((res) => {
        this.listUniversites = res;
      });
    }
    updateUniversite(idUni: number) {
      this.router.navigate(['/universites/universite/putUni', idUni]);
    }
  
    
    deleteUniv(idUni: number) {
      this.universiteservice.deleteUni(idUni).subscribe((data) => {
        console.log(data);
        this.allUni();
      });
    }
    
    toadd(){
      this.router.navigate(['/universites/universite/add'])
    } 
    
  }
 
  


