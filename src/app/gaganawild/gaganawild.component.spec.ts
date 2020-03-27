import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaganawildComponent } from './gaganawild.component';

describe('GaganawildComponent', () => {
  let component: GaganawildComponent;
  let fixture: ComponentFixture<GaganawildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaganawildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaganawildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
