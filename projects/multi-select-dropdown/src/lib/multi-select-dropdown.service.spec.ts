import { TestBed } from '@angular/core/testing';

import { MultiSelectDropdownService } from './multi-select-dropdown.service';

describe('MultiSelectDropdownService', () => {
  let service: MultiSelectDropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiSelectDropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
