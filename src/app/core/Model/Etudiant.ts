import { Contrat } from "./Contrat";
import { Department } from "./Department";
import { Equipe } from "./Equipe";
import { Option } from "./Option";

export class Etudiant {
    idEtudiant : number ;
    nomE : String ;
    prenomE : String ;
    options:Option;
    department:Department;
    contrats:Contrat;
    equipes:Equipe
}