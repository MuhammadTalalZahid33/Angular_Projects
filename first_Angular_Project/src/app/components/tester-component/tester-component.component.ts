import { NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tester-component',
  standalone: true,
  imports: [NgIf],
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

  // Custom Event
  @Input() greeting!: string ;

  // Define a custom event
  @Output() notify = new EventEmitter<string>();

  sendMessageToParent() {
    this.notify.emit('Hello Parent! Message from Child 👋');
  }

  // Conditional Rendering
   @Input() isEmbedded = false; // 👈 added input flag
}
