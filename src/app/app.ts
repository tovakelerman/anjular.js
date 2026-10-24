import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentGradesComponent } from './lesson-2/lesson-2';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, CommonModule, StudentGradesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isLoggedIn = false;

  // יוצרים את הטופס ומגדירים כותרת עם טקסט התחלתי
  termsForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{9}$/), // תשע ספרות
    ]),
    isApproved: new FormControl(false, Validators.requiredTrue),
  });

  /** יציאה חזרה למסך הכניסה */
  logout(): void {
    this.isLoggedIn = false;
    this.termsForm.reset({ title: '', isApproved: false });
  }

  /** נקרא בלחיצה על "היכנס" */
  onSubmit(): void {
    if (this.termsForm.invalid) {
      this.termsForm.markAllAsTouched();
      return;
    }

    // "התחברות" — כאן היה נשלח המידע לשרת
    this.isLoggedIn = true;
  }
}
