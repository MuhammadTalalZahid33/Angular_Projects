import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
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
}
