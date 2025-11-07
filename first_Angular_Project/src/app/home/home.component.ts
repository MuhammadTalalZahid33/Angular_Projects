import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homebutton = signal('Get Started you idiot');
  @Input() welcometext !: string;
}
