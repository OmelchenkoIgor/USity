import { Component, OnInit, inject } from '@angular/core';
import { locationService } from './api/location.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InformationComponent } from "../../widgets/location-page/information/information.component";
import { ServicesComponent } from "../../widgets/location-page/services/services.component";
import { ReviewsComponent } from "../../widgets/location-page/reviews/reviews.component";
import { DescriptionComponent } from "../../widgets/location-page/description/description.component";
import { RecomendationsComponent } from "../../widgets/location-page/recomendations/recomendations.component";

@Component({
    selector: 'app-location',
    standalone: true,
    templateUrl: 'location.component.html',
    styleUrl: 'location.component.scss',
    imports: [InformationComponent, ServicesComponent, ReviewsComponent, DescriptionComponent, RecomendationsComponent]
})
export default class LocationComponent implements OnInit {
  private locationService: locationService = inject(locationService);
  private router: ActivatedRoute = inject(ActivatedRoute);

  location: any;

  ngOnInit() {
    this.router.url.subscribe(url => {
      console.log(url[1].path);
      this.locationService.getLocation(url[1].path).subscribe((data) => {
        console.log(data);
        this.location = data;
      })
    });
  }
}
