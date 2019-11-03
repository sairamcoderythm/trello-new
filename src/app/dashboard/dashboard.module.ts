import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromDashboard from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './dashboard.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromDashboard.dashboardFeatureKey, fromDashboard.dashboardReducer),
    EffectsModule.forFeature([DashboardEffects])
  ]
})
export class DashboardModule { }
