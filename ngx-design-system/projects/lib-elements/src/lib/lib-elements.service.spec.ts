import { TestBed } from '@angular/core/testing';

import { LibElementsService } from './lib-elements.service';

describe('LibElementsService', () => {
  let service: LibElementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
