import { createAction, props, createSelector } from '@ngrx/store';
import { Dashboard } from '../../models/dashboard';
import { Update } from '@ngrx/entity';

export const createDashboard = createAction(
  '[Create Dashboard] Create Dashboard',
  props<{dashboard: any}>()
);


export const loadDashboards = createAction(
  '[Load Dashboard] Load Dashboard'
);


export const allDashboardsloaded = createAction(
  '[Load Course Effect] All Dashboards Loaded',
    props<{dashboard: any}>()
);

export const dashboardAdded = createAction(
  '[Create Dashboard] Create Dashboard',
  props<{dashboard: Dashboard[]}>()
)
