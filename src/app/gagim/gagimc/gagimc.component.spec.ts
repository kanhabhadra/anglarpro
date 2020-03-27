import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GagimcComponent } from './gagimc.component';

describe('GagimcComponent', () => {
  let component: GagimcComponent;
  let fixture: ComponentFixture<GagimcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GagimcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GagimcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
