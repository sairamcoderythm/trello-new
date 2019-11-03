import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Dashboard } from './models/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private dashboardUrl = '/api/dashboards';

  constructor(private http: HttpClient) { }

  getDashboards(): Observable<Dashboard[]> {
    return this.http.get<Dashboard[]>(this.dashboardUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }


  getDashboard(id: number): Observable<Dashboard> {
    if (id === 0) {
      return of(this.initializeDashboard());
    }
    const url = `${this.dashboardUrl}/${id}`;
    return this.http.get<Dashboard>(url)
      .pipe(
        tap(data => console.log('getDashboard: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createDashboard(dashboard: Dashboard): Observable<Dashboard> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    dashboard.id = null;
    return this.http.post<Dashboard>(this.dashboardUrl, dashboard, { headers })
      .pipe(
        tap(data => console.log('createDashboard: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteDashboard(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.dashboardUrl}/${id}`;
    return this.http.delete<Dashboard>(url, { headers })
      .pipe(
        tap(data => console.log('deleteDashboard: ' + id)),
        catchError(this.handleError)
      );
  }

  updateDashboard(dashboard: Dashboard): Observable<Dashboard> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.dashboardUrl}/${dashboard.id}`;
    return this.http.put<Dashboard>(url, dashboard, { headers })
      .pipe(
        tap(() => console.log('updateDashboard: ' + dashboard.id)),
        // Return the product on an update
        map(() => dashboard),
        catchError(this.handleError)
      );
  }


  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }


    private initializeDashboard(): Dashboard {
    // Return an initialized object
    return {
        id: 0,
        name: null,
        taskList: [ {
          id:0,
          name: null,
          noteList: [ {
            id: 0,
            name: null
          }]
        } ]

    };
  }
}
