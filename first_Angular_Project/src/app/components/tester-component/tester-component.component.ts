import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tester-component',
  standalone: true,
  imports: [],
  templateUrl: './tester-component.component.html',
  styleUrl: './tester-component.component.scss'
})
export class TesterComponentComponent {
  IsFormInValid = true;
  testId = 'main-cta';

  announcement = 'Hello again Angular!';
  transformText() {
    this.announcement = this.announcement.toUpperCase();
  }
  
}
