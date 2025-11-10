import { Component, EventEmitter, input, Input, Output, signal } from '@angular/core';
import { ChildComponent } from "../components/child/child.component";
import { CounterComponent } from '../components/counter/counter.component';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChildComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homebutton = signal('Get Started you idiot');
  @Input() welcometext !: string;
  greetings = input('Hello everyone'); // better than @Input(v17+)

  @Output() messageEvent = new EventEmitter<string>();
  sendMessage(){
    this.messageEvent.emit("Hello Parent, I am child")
  }  
}
