import { TestBed } from '@angular/core/testing';

import { ConnectServService } from './connect-serv.service';

describe('ConnectServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnectServService = TestBed.get(ConnectServService);
    expect(service).toBeTruthy();
  });
});
