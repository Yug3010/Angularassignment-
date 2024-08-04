import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  myForm: FormGroup;
  submitted = false; // Added property

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern('^\\+?[1-9]\\d{1,14}$')]], // Example pattern
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    this.submitted = true; // Set submitted to true on form submission
    if (this.myForm.valid) {
      console.log('Form Submitted', this.myForm.value);
    }
  }
}
