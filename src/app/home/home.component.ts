import { Component } from '@angular/core';
import { AdvertComponent } from '../advert/advert.component';
import { CommonModule } from '@angular/common';
import { PatienttrackingComponent } from '../patienttracking/patienttracking.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AdvertComponent, CommonModule, PatienttrackingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  adsArray = [
    {
      heading: "Fresh Deals",
      subHeading: "Get the best discounts on fresh produce.",
      imageSrc: "https://images.unsplash.com/photo-1506806732259-39c2d0268443" // Fresh produce
    },
    {
      heading: "Tech Sale",
      subHeading: "Latest gadgets at unbeatable prices.",
      imageSrc: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853" // Gadgets
    },
    {
      heading: "Travel More",
      subHeading: "Exclusive travel packages for your next adventure.",
      imageSrc: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c" // Travel
    },
    {
      heading: "Fashion Fiesta",
      subHeading: "Stay trendy with the latest fashion collection.",
      imageSrc: "https://images.unsplash.com/photo-1484327973588-c31f829103fe" // Fashion
    },
    {
      heading: "Home Essentials",
      subHeading: "Upgrade your home with quality essentials.",
      imageSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" // Home essentials
    }
  ];
  

}
