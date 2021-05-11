import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ng-training-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      step: new FormControl('', Validators.required),
    })
  }

  public submitStep(): void {
    alert(this.form.get('step')?.value);
  }
}
