import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {DashboardActions} from './createdashboard/state/action-types';
import {concatMap, map} from 'rxjs/operators';
import {allDashboardsloaded} from './createdashboard/state/dashboard.actions';
import { DashboardService } from './dashboard.service';



@Injectable()
export class DashboardEffects {

    loadCourses$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(DashboardActions.loadDashboards),
                concatMap(action =>
                    this.dashboardService.getDashboards()),
                map(dashboard => allDashboardsloaded({dashboard})))
    );



    saveDashboard$ = createEffect(
      () => this.actions$
          .pipe(
              ofType(DashboardActions.createDashboard),
              concatMap(action => this.dashboardService.createDashboard(
                  action.dashboard
              ))
          ),
      {dispatch: false}
  );

    constructor(private actions$: Actions,
                private dashboardService: DashboardService) {

    }

}
