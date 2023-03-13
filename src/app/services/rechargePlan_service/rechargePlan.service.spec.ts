import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RechargePlanService } from './rechargePlan.service';

describe('MockDataService', () => {
  let service: RechargePlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RechargePlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
