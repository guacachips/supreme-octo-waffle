import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSowLibraryComponent } from './ngx-sow-library.component';

describe('NgxSowLibraryComponent', () => {
  let component: NgxSowLibraryComponent;
  let fixture: ComponentFixture<NgxSowLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSowLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSowLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
