import { TestBed } from '@angular/core/testing';

import { UserAdminService } from './user-admin.service';

describe('UserAdminService', () => {
  let service: UserAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAdminService);
  });

 

  /** test para que no se visualice debe ser creado */
 it('', () => {
  expect(service).toBeTruthy();
});
});
