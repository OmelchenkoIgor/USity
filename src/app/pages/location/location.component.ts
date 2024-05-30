import { Component, OnInit, inject } from '@angular/core';
import { locationService } from './api/location.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [],
  templateUrl: 'location.component.html',
  styleUrl: 'location.component.scss'
})
export default class LocationComponent implements OnInit {
  private locationService: locationService = inject(locationService);
  private router: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.router.url.subscribe(url => {
      console.log(url[1].path);
      this.locationService.getLocation(url[1].path).subscribe((data) => {
        console.log(data);

      })
    });
  }
}
