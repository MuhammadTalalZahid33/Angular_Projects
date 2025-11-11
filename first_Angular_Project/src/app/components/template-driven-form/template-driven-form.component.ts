import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, NgIf, JsonPipe],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {
 user = {
    name: '',
    email: '',
    password: '',
    gender: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form submitted:', this.user);
      alert(`Welcome, ${this.user.name}!`);
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
