import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState } from '../../reducers/index';
import * as fromDashboards from '../../reducers/index'

export const selectDashboardState = createFeatureSelector<DashboardState>('dashboard');

export const selectAllDashboards = createSelector(
  selectDashboardState,
  fromDashboards.selectAll
)


