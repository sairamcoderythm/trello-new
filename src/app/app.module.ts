import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import {MatCardModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule} from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreatedashboardComponent } from './dashboard/createdashboard/createdashboard.component';
import { from } from 'rxjs';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DashboardData } from './dashboard/dashboard-data';
import { HttpClientModule } from '@angular/common/http';
import { DashboardDetailListComponent } from './dashboard/dashboard-detail-list/dashboard-detail-list.component';
import { NoteListComponent } from './dashboard/note-list/note-list.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { DashboardResolver } from './dashboard/dashboard-resolver';

@NgModule({
  declarations: [
    AppComponent,
    CreatedashboardComponent,
    DashboardDetailListComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    InMemoryWebApiModule.forRoot(DashboardData),
    RouterModule.forRoot([
      { path: '', component: CreatedashboardComponent,  resolve : {
        dashboard: DashboardResolver
      }  },
      { path: 'dashboards', component: CreatedashboardComponent,
     resolve : {
       dashboard: DashboardResolver
     } },
      { path: 'dashboards/:id', component: DashboardDetailListComponent },
    ]),
    DashboardModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  entryComponents: [
    NoteListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
