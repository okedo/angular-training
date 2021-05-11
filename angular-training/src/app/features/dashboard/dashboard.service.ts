import { Observable } from 'rxjs/internal/Observable';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Step } from '../../common/interfaces/step.interface';

@Injectable()
export class DashboardService {
  constructor(private httpClient: HttpClient) {

  }
  public getSteps(): Observable<Array<Step>> {
    return this.httpClient.get<Array<Step>>('./assets/steps.json');
  }
}
