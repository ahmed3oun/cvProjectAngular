import { Component, OnInit } from '@angular/core';
import { Personne } from '../Model/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  listePersonnes : Personne[] = [
    new Personne(1,"Ahmed","Oun",24,"Etudiant","ahmed.jpg"),
    new Personne(2,"Jean","jores",24,"Etudiant","jores.jpg"),
    new Personne(3,"Jack","Montali",24,"developper","jack.jpg")
  ];

  selectedPers : Personne;


  constructor() { }

  ngOnInit(): void {
  }

  recuperer(msgPers){
    this.selectedPers= msgPers;
  }

}
