import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  name: string;
  todayDate: string;
  num: number;
  constructor() {}

  ngOnInit(): void {
    this.todayDate = new Date().toDateString();
    this.name = 'Ali Haider';
    this.num = 12;
  }
}
