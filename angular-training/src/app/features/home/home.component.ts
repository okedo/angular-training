import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { StepService } from './step.service';

@Component({
  selector: 'ng-training-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public form: FormGroup;
  constructor(private fb: FormBuilder, private stepService: StepService) {
    this.form = this.fb.group({
      step: new FormControl('', Validators.required),
    })
  }

  public submitStep(): void {
    this.stepService.saveStep(this.form.get('step')?.value);
  }
}
