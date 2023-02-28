import { Observable } from "rxjs";
import { RechargePlanModel } from "src/app/models/rechargePlan.model";

export interface IRechargePlanService {

  // returns observable that resolves to list of todos
  getRechargePlan(): Observable<RechargePlanModel[]>;

}
