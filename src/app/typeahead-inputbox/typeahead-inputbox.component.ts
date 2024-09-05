import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-typeahead-inputbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './typeahead-inputbox.component.html',
  styleUrl: './typeahead-inputbox.component.css'
})
export class TypeaheadInputboxComponent implements OnInit{

  @Input() suggestionList: any = [];
  @Output() setSelectedDoctor = new EventEmitter();
  data: any;
  renderedList: any = [];
  selectedDoctor: any;

  ngOnInit(): void {
  }

  keyPress(event: any) {
    console.log(this.suggestionList);
    console.log(this.data);
    this.renderedList = this.suggestionList?.filter((item: any) =>  item?.name?.toLowerCase().includes(this.data?.toLowerCase()));
    console.log(this.renderedList);
  }

  selectDoctor(doc: any) {
    console.log(doc);
    this.selectedDoctor = doc;
    this.data = this.selectedDoctor?.name;
    this.setSelectedDoctor.emit(doc);
    this.renderedList = [];
  }
}
