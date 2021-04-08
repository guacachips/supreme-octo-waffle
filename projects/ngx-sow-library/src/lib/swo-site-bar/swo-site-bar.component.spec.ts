import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwoSiteBarComponent } from './swo-site-bar.component';

describe('SwoSiteBarComponent', () => {
  let component: SwoSiteBarComponent;
  let fixture: ComponentFixture<SwoSiteBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwoSiteBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwoSiteBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
