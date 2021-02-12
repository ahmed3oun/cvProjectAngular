import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../Model/Personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() lstPers : Personne[];

  @Output() persToCv = new EventEmitter<Personne>();
  constructor() { }

  ngOnInit(): void {
  }

  recievedPers(msgPers){
    this.persToCv.emit(msgPers);
  }

}
