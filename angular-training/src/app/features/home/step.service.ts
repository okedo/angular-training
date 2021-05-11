import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class StepService {

  constructor(private router: Router) { }

  public saveStep(stepName: string): void {
    this.router.navigate(['/dashboard'], {
      state: {
        stepName
      }
    })
  }
}
