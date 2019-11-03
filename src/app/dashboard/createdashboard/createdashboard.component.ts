import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DashboardService } from '../dashboard.service';
import { Dashboard } from '../models/dashboard';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../reducers/index';
import { selectAllDashboards } from './state/dashboard.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-createdashboard',
  templateUrl: './createdashboard.component.html',
  styleUrls: ['./createdashboard.component.css']
})
export class CreatedashboardComponent implements OnInit {

  saveForm:FormGroup;
  // dashboard: Observable<Dashboard[]>;
  dashboard: Dashboard[];
  errorMessage: any;
  updateDashboard: Dashboard;

  constructor(private fb: FormBuilder,
       private dashboardService: DashboardService,
       private store: Store<AppState>) { }

  ngOnInit() {
    this.saveForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
    this.reload();
  }

  reload() {
   this.dashboardService.getDashboards().subscribe(
     (dashboards) => {
       this.dashboard = dashboards;
       console.log(dashboards);
     }
   );
    //this.dashboard = this.store.pipe(select(selectAllDashboards));
  }

  // save() {
  // let value = this.saveForm.value;
  // }


  getDashboard(id: number): void {
    this.dashboardService.getDashboard(id)
      .subscribe({
        next: (dashboard: Dashboard) => this.displayDashboard(dashboard),
        error: err => this.errorMessage = err
      });
  }

  displayDashboard(dashboard: Dashboard): void {
    if (this.saveForm) {
      this.saveForm.reset();
    }
    this.updateDashboard = dashboard;
    console.log(this.updateDashboard);

    // Update the data on the form
    this.saveForm.patchValue({
      name: this.updateDashboard.name
    });
  }

  save(): void {
    if (this.saveForm.valid) {
      if (this.saveForm.dirty) {
        const d = { ...this.dashboard, ...this.saveForm.value };
        console.log(d);
        if (d.id === undefined) {
          this.dashboardService.createDashboard(d)
            .subscribe({
              next: () => this.onSaveComplete(),
              error: err => this.errorMessage = err
            });
        } else if(d.id !== undefined){
          this.dashboardService.updateDashboard(d)
            .subscribe({
              next: () => this.onSaveComplete(),
              error: err => this.errorMessage = err
            });
        }
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
     this.saveForm.reset();
    //this.router.navigate(['/products']);
     this.reload();
  }

  deleteDashboard(id:number): void {
      if (confirm('Really delete the Dashboard')) {
        this.dashboardService.deleteDashboard(id)
          .subscribe({
            next: () => this.onSaveComplete(),
            error: err => this.errorMessage = err
          });
      }
    }

    update(){

    }

}


