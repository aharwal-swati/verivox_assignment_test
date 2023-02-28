import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/recharge-plans/recharge-plans.module').then(
        (m) => m.RechargePlansModule
      ),
  },
  {
    path: 'rechargeplan',
    loadChildren: () =>
      import('./components/recharge-plans/recharge-plans.module').then(
        (m) => m.RechargePlansModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
