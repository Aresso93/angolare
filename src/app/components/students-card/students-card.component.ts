import { Component, Input } from '@angular/core';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-students-card',
  templateUrl: './students-card.component.html',
  styleUrls: ['./students-card.component.scss']
})
export class StudentsCardComponent {
  @Input() studentData?:Student;
}
