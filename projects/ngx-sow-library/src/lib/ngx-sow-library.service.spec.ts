import { TestBed } from '@angular/core/testing';

import { NgxSowLibraryService } from './ngx-sow-library.service';

describe('NgxSowLibraryService', () => {
  let service: NgxSowLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSowLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
