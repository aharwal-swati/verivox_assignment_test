import { RechargePlanService } from '../app/services/rechargePlan_service/rechargePlan.service';
import { RechargePlanService as MockDataService } from '../app/services/rechargePlan_service/rechargePlanMockData.service';

export const environment = {
  production: true,
  providers: [{ provide: RechargePlanService, useClass: MockDataService }],
};
