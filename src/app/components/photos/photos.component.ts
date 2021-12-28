import { People } from './../../models/people';
import { FakeDataGeneratorService } from './../../services/fake-data-generator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  styles: [``],
  selector: 'app-photos',
  // templateUrl: './photos.component.html',
  template: `
    <div class="row g-3">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3"
        *ngFor="let people of peoples; index as i"
      >
        <img
          [src]="people.image"
          [alt]="people.name"
          style="width: 100%; object-fit:cover;"
          loading="lazy"
        />
      </div>
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
