import { TestBed } from '@angular/core/testing';

import { FakeDataGeneratorService } from './fake-data-generator.service';

describe('FakeDataGeneratorService', () => {
  let service: FakeDataGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeDataGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
