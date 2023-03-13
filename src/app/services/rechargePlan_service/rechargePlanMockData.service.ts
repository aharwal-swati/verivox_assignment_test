import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { IRechargePlanService } from './rechargePlan.interface.service';
import { RechargePlanModel } from 'src/app/models/rechargePlan.model';

@Injectable({
  providedIn: 'root',
})
export class RechargePlanService implements IRechargePlanService {
  benefit = Array<string>;
  private mockRechargePlan: RechargePlanModel[] = [
    {
      id: 1,
      name: 'World X',
      speed: { download: '24 mbit/s', upload: '12 mbit/s' },
      benefit: [
        '10+ years of excellence',
        'It is one of the most exciting research areas as of today',
        'We will see how Python can be used to work with text files.',
      ],
      price: 10,
    },
    {
      id: 1,
      name: 'World Z',
      speed: { download: '14 mbit/s', upload: '10 mbit/s' },
      benefit: [
        'If you want to learn more about our us',
        'Recharge your loved ones',
        'MobileRecharge',
      ],
      price: 15,
    },
    {
      id: 1,
      name: 'World Y',
      speed: { download: '16 mbit/s', upload: '10 mbit/s' },
      benefit: [
        'its easy, fast and secure to recharge your own Airtel mobile',
        'to make your family and friends back home happy',
        'by recharging their prepaid phone',
      ],
      price: 20,
    },
    {
      id: 1,
      name: 'World A',
      speed: { download: '18 mbit/s', upload: '12 mbit/s' },
      benefit: [
        'Fabulously easy to use',
        'Instant recharge on the go',
        'Good value for money',
      ],
      price: 25,
    },
    {
      id: 1,
      name: 'World B',
      speed: { download: '36 mbit/s', upload: '20 mbit/s' },
      benefit: [
        'Trustworthy & secure  ',
        'No need to go to a store',
        'Mobile credit at your fingertips',
      ],
      price: 30,
    },
  ];

  getRechargePlan(): Observable<RechargePlanModel[]> {
    return of(this.mockRechargePlan);
  }
}
