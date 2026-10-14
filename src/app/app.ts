import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // יוצרים את הטופס ומגדירים כותרת עם טקסט התחלתי
  termsForm = new FormGroup({
    title: new FormControl(''), // ערך התחלתי ריק  
    isApproved: new FormControl(false),
  })
}
