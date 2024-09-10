import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counterstatus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counterstatus.component.html',
  styleUrl: './counterstatus.component.css'
})
export class CounterstatusComponent {

  @Input() value: string = "0";
  @Input() message: string = "active";
  @Input() inverse: boolean = false;

  constructor() {}

}
