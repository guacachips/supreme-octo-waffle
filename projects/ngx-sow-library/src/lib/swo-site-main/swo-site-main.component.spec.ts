import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwoSiteMainComponent } from './swo-site-main.component';

describe('SwoSiteMainComponent', () => {
  let component: SwoSiteMainComponent;
  let fixture: ComponentFixture<SwoSiteMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwoSiteMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwoSiteMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
