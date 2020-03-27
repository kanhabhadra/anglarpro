import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaganaaComponent } from './gaganaa.component';

describe('GaganaaComponent', () => {
  let component: GaganaaComponent;
  let fixture: ComponentFixture<GaganaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaganaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaganaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
