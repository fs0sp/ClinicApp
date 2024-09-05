import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-advert',
  standalone: true,
  imports: [],
  templateUrl: './advert.component.html',
  styleUrl: './advert.component.css'
})
export class AdvertComponent {
  @Input() heading: string = "Step into Style with Our Latest Collection";
  @Input() subHeading: string = "Unleash your stride with shoes that redefine comfort and elegance—because every step deserves the best!";
  @Input() imageSrc: string = "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg";
}
