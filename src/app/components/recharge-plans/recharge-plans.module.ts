import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RechargePlansRoutingModule } from './recharge-plans-routing.module';
import { RechargePlansComponent } from './recharge-plans.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [RechargePlansComponent],
  imports: [
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    CommonModule,
    RechargePlansRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RechargePlansModule {}
