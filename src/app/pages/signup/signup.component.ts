import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../../globals/api/actions/users/api-signup.service';  // Correct service

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  submitted = false;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private signupService: SignupService,   //  Inject correct service
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.signupForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.signupForm.invalid) {
      return;
    }

    this.loading = true;

    // Use the signup service method
    this.signupService.signup(this.signupForm.value).subscribe({
      next: (res) => {
        console.log('✅ Signup success:', res);
        this.loading = false;
        this.router.navigate(['/login']);
        // Redirect to login after success
        // this.zone.run(() => {
          
        // });
      },
      error: (err) => {
        console.error('❌ Signup failed:', err);
        this.errorMessage = err?.error?.message || 'Signup failed. Please try again.';
        this.loading = false;
      }
    });
  }
}
