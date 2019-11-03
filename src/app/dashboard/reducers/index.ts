import { Dashboard } from '../models/dashboard';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { DashboardActions } from '../createdashboard/state/action-types';


export const dashboardFeatureKey = 'dashboard';

export interface DashboardState extends EntityState<Dashboard>{}

export const adapter = createEntityAdapter<Dashboard>({});

export const initialDashboardState = adapter.getInitialState({
});

// export const dashboardReducer = createReducer(
//   initialDashboardState,
//   on(DashboardActions.allDashboardsloaded,
//     (state, action) => { adapter.addAll(action.dashboard, state)}
//     )
// )

export const dashboardReducer = createReducer(

  initialDashboardState,

  on(DashboardActions.allDashboardsloaded,
      (state, action) => adapter.addAll(
          action.dashboard,
          {...state,
          })),

       on(DashboardActions.createDashboard, (state, action) =>
        adapter.addOne(action.dashboard, state) )

);

export const {
  selectAll
} = adapter.getSelectors();




