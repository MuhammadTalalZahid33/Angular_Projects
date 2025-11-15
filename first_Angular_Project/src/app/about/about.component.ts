import { NgFor, NgIf } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { TesterComponentComponent } from "../components/tester-component/tester-component.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, TesterComponentComponent, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  title = signal('About Us');
  description = signal(`
    This Angular app was built to demonstrate modern Angular features — 
    including standalone components, signals, and clean routing.
  `);
  technologies = signal(['Angular 18', 'TypeScript', 'RxJS', 'Signals', 'SCSS']);

  //For Custom Event
  parentMessage = 'Hello from Parent!';

  childMessage = signal('blah blah');
  // This method will run when the child emits an event
  handleChildEvent(message: string) {
    this.childMessage.set(message);
  }

}
