import { Injectable } from '@angular/core';

import { finishedSteps } from '../../common/constants/steps.constant';
import { Step } from '../../common/interfaces/step.interface';

@Injectable()
export class DashboardService {
  public getSteps(): Array<Step> {
    return finishedSteps;
  }
}
