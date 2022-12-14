import { Contrat } from './Contrat';
import { Departement } from './Department';
import { Equipe } from './Equipe';
import { Genre } from './Genre';
import {  Option } from './Option';

export class Etudiant {
  idEtudiant: number;
  nomE: String;
  prenomE: String;
  option: Option;
  department: Departement;
  contrats: Contrat;
  equipes: Equipe;
  genre: Genre;
  email: string;
  photo: any;
  DateNaissance: any;
}
