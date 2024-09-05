import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-textarea',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './custom-textarea.component.html',
  styleUrl: './custom-textarea.component.css'
})
export class CustomTextareaComponent {

  @Output() emitData = new EventEmitter();
  @Input() label = "";
  
  data: string = "";
  savedArray:String[] = [];

  saveData() {
    if(this.data === "") return;
    this.savedArray.push(this.data);
    console.log(this.data, this.savedArray);
    this.data = "";
    this.emitData.emit(this.savedArray);
  }

  keyPress(event: any) {
    if(event.code === 'Enter') {
      this.saveData();
    }
  }
}
