import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaganaComponent } from './gagana.component';

describe('GaganaComponent', () => {
  let component: GaganaComponent;
  let fixture: ComponentFixture<GaganaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaganaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaganaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
