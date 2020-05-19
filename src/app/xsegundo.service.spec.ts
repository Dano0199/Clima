import { TestBed } from '@angular/core/testing';

import { XsegundoService } from './xsegundo.service';

describe('XsegundoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XsegundoService = TestBed.get(XsegundoService);
    expect(service).toBeTruthy();
  });
});
