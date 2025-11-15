import { JsonPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit {
  userForm !: FormGroup;
  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', Validators.required]
    });
  }

  onSubmit(){
    if(this.userForm.valid){
      console.log('form submitted:', this.userForm.value);
      alert(`Welcome, ${this.userForm.value.name}`);
    }else{
      this.userForm.markAllAsTouched();
      alert('Please fill all the required fields correctly...');
    }
  }

  get f(){
    return this.userForm.controls;
  }

}
