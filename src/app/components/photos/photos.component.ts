import { People } from './../../models/people';
import { FakeDataGeneratorService } from './../../services/fake-data-generator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  styles: [``],
  selector: 'app-photos',
  template: `
    <div
      *ngFor="let people of peoples; index as i"
      style="  display: grid;
  grid-template-columns: auto auto auto auto auto;
  background-color: #2196F3;
  padding: 10px; "
    >
      <img [src]="people.image" [alt]="people.name" style="width: 100%;" />
    </div>
  `,
})
export class PhotosComponent implements OnInit {
  peoples: People[];
  constructor(private _fakeDataGeneratorService: FakeDataGeneratorService) {}

  ngOnInit(): void {
    this.peoples = this._fakeDataGeneratorService.generateRandomPeoples();
    console.log(this.peoples, 'peoples');
  }
}
