import { TestBed } from '@angular/core/testing';

import { ObjsService } from './objs.service';

describe('ObjsService', () => {
  let service: ObjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
