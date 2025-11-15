import { style, transition, trigger, state, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-animexample',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animexample.component.html',
  styleUrl: './animexample.component.scss',
  animations: [
    trigger('fadeAnimation', [
      state('visible', style({ opacity: 1, transform: 'scale(1)' })),
      state('hidden', style({ opacity: 0, transform: 'scale(0.95)' })),
      transition('visible <=> hidden', animate('1s ease-in-out')),
    ])
  ]
})
export class AnimexampleComponent {
  isVisible = true;

  toggleBox(){
    this.isVisible = !this.isVisible;
  }

  isActive = false;
  toggleActive(){
    this.isActive = !this.isActive;
  }
}
