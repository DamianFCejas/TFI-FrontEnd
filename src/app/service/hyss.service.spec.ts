import { TestBed } from '@angular/core/testing';

import { HyssService } from './hyss.service';

describe('HyssService', () => {
  let service: HyssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HyssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
