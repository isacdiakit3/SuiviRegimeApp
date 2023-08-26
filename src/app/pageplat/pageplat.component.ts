import { Component } from '@angular/core';
import { FormService } from '../form.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pageplat',
  templateUrl: './pageplat.component.html',
  styleUrls: ['./pageplat.component.scss']
})
export class PageplatComponent {
  platForm: FormGroup;

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.platForm = this.fb.group({
      image: new FormControl(''),
      nom: new FormControl(''),
      des: new FormControl(''),
      calorie: new FormControl(0)
    });
  }

  onSubmit(): void {
    const submittedForm = this.platForm.value;
    const formGroup = this.fb.group(submittedForm);
    this.formService.saveFormGroup(formGroup);
  }
}
