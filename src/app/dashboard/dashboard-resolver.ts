import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AppState} from '../reducers';
import {select, Store} from '@ngrx/store';
import {filter, finalize, first, tap} from 'rxjs/operators';
import {loadDashboards} from './createdashboard/state/dashboard.actions';
//import {areCoursesLoaded} from './courses.selectors';


@Injectable({
  providedIn: 'root'
})
export class DashboardResolver implements Resolve<any> {

    loading = false;

    constructor(private store: Store<AppState>) {

    }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<any> {

        return this.store
            .pipe(
                // select(areCoursesLoaded),
                tap(() => {
                    // if (!this.loading && !loadDashboards) {
                    //     this.loading = true;
                    //     this.store.dispatch(loadDashboards());
                    // }
                    this.store.dispatch(loadDashboards());
                }),
                //filter(coursesLoaded => coursesLoaded),
                first(),
                 //finalize(() => this.loading = false)
            );

    }

}
