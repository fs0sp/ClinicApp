import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CapitalizePipe } from '../capitalize.pipe';

@Component({
  selector: 'app-patient-history',
  standalone: true,
  imports: [CommonModule, CapitalizePipe],
  templateUrl: './patient-history.component.html',
  styleUrl: './patient-history.component.css'
})
export class PatientHistoryComponent {

  @Input() patientDetails: any;
  showAccordian: boolean = false;

  constructor() { }

  toggleAccordian() {
    this.showAccordian = !this.showAccordian;
  }
}
