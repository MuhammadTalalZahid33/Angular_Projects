import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-child',
  standalone: true,
    imports: [ReactiveFormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  
  onClickLogMessage(event: KeyboardEvent){
    console.log(`you have pressed the key: ${event.key}`);
  }
  name = new FormControl;

  Print(){
    console.log("hello", this.name.value);
  }

  SetValues(){
    this.name.setValue('talal');
  }
}
