import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibElementsComponent } from './lib-elements.component';

describe('LibElementsComponent', () => {
  let component: LibElementsComponent;
  let fixture: ComponentFixture<LibElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
