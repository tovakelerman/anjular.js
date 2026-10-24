import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from './subject.model';

@Component({
  selector: 'app-lesson-2',
  imports: [CommonModule],
  templateUrl: './lesson-2.html',
  styleUrl: './lesson-2.css',
})
export class StudentGradesComponent {
  isgoodmark: boolean = false;

  subjectsList: Subject[] = [
    { subjectName: 'angular', mark: 90 },
    { subjectName: 'typescript', mark: 50 },
    { subjectName: 'javascript', mark: 95 },
    { subjectName: 'core', mark: 97 },
    { subjectName: 'java', mark: 100 },
    { subjectName: 'matematic', mark: 43 },
  ];

  /** בדיקה לכל אובייקט בנפרד: האם הציון שלו עובר (60 ומעלה) */
  isGoodMark(mark: number): boolean {
    return mark >= 60;
  }

  toggleVisibility(): void {
    this.isgoodmark = !this.isgoodmark;
  }
  /** סכום כל הציונים */
  totalMarks(): number {
    return this.subjectsList.reduce((sum, item) => sum + item.mark, 0);
  }
}
