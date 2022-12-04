import { Component, OnInit } from '@angular/core';
import { Universite } from 'src/app/core/Model/Universite';
import{UniversiteService} from 'src/app/core/services/universite.service'

@Component({
  selector: 'app-details-universite',
  templateUrl: './details-universite.component.html',
  styleUrls: ['./details-universite.component.css']
})
export class DetailsUniversiteComponent implements OnInit {

  constructor( private universiteservice:UniversiteService) { }
  currentUniversite: Universite ={
    idUni:0,
    nomUni:"",
    adresse:"",
    description:"",
  
   
  };
  public list:  Universite[];
  universites: Universite[];
  currentIndex = -1;
  nomUni=""
  ngOnInit(): void {
    this.retriveUniversites();
  }
  retriveUniversites():void{
    this.universiteservice.allUni().subscribe({
      next:(data)=>{
        this.universites=data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
  refreshList(): void {
    this.retriveUniversites();
    this.currentUniversite = {  idUni:0,
      nomUni:"",
      adresse:"",
      description:"",
      
  };
    this.currentIndex = -1;
  }

  setActiveTutorial(universite: Universite, index: number): void {
    this.currentUniversite = universite;
    this.currentIndex = index;
  }
  
  
  }

