import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RechargePlansComponent } from './recharge-plans.component';

const routes: Routes = [{ path: '', component: RechargePlansComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RechargePlansRoutingModule { }
