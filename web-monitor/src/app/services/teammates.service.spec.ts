import { TestBed } from '@angular/core/testing';

import { TeammatesService } from './teammates.service';

describe('TeammatesService', () => {
  let service: TeammatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeammatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
