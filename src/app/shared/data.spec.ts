

import { TestBed } from '@angular/core/testing';
import { DataService } from './data';

describe('DataService', () => { // 🟢 Змінюємо опис тесту
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
