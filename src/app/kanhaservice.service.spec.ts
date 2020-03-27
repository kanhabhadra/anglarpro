import { TestBed } from '@angular/core/testing';

import { KanhaserviceService } from './kanhaservice.service';

describe('KanhaserviceService', () => {
  let service: KanhaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanhaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
