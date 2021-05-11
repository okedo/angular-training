import { Component, OnInit } from '@angular/core';

import { DashboardService } from './dashboard.service';
import { SessionStorageService } from '../../common/helpers/session-storage.helper';
import { Step } from '../../common/interfaces/step.interface';

@Component({
  selector: 'ng-training-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public finishedSteps: Array<Step> = [];
  public futureStep: string = "";

  constructor(private dashboardService: DashboardService) { }

  public ngOnInit(): void {
    this.futureStep = SessionStorageService.futureStep;
    this.getSteps();
  }

  public clear(): void {
    this.futureStep = "";
    SessionStorageService.clear();
  }

  private getSteps(): void {
    this.dashboardService.getSteps().subscribe((steps: Array<Step>) => this.finishedSteps = steps)
  }
}
