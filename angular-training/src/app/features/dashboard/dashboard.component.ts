import { Component, OnInit } from '@angular/core';

import { Step } from '../../common/interfaces/step.interface';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'ng-training-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public finishedSteps: Array<Step> = [];

  constructor(private dashboardService: DashboardService) { }

  public ngOnInit(): void {
    this.getSteps();
  }

  private getSteps(): void {
    this.dashboardService.getSteps().subscribe((steps: Array<Step>) => this.finishedSteps = steps)
  }
}
