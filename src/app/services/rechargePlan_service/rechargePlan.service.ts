import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { IRechargePlanService } from './rechargePlan.interface.service';
import { RechargePlanModel } from 'src/app/models/rechargePlan.model';

@Injectable({
  providedIn: 'root'
})
export class RechargePlanService implements IRechargePlanService {

  constructor(private httpClient:HttpClient ) { }
  getRechargePlan(): Observable<RechargePlanModel[]> {
    return this.httpClient.get<RechargePlanModel[]>('/api/rechargeplan');
  }


}
