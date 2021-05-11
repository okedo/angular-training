import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { SessionStorageService } from '../../common/helpers/session-storage.helper';

@Injectable()
export class StepService {

  constructor(private router: Router) { }

  public saveStep(stepName: string): void {
    SessionStorageService.futureStep = stepName;
    this.router.navigate(['/dashboard']);
  }
}
