import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../Model/Personne';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() selectedPers : Personne;

  constructor() { }

  ngOnInit(): void {
  }

}
