import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent implements OnInit {

  @Input() error: boolean = false;


  constructor(private router: Router) {

  }
  ngOnInit(): void {
    console.log("Error ::", this.error);
  }

  routeFailed() {
    console.log("falie")
    this.router.navigate(['signin']);
  }

  routeSuccess() {
    this.router.navigate(['add-profile']);
  }

}
