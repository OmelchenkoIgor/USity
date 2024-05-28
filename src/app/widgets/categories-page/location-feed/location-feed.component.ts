import { ChangeDetectionStrategy, Component, OnInit, WritableSignal, effect, inject, signal } from '@angular/core';
import { CardComponent } from './ui/card/card.component';
import { locationsService } from './api/locations.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-feed',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: 'location-feed.component.html',
  styleUrl: 'location-feed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationFeedComponent implements OnInit {

  private locationsService: locationsService = inject(locationsService);

  private route: ActivatedRoute = inject(ActivatedRoute);

  typelocation: WritableSignal<string> = signal('all');
  locationsList: WritableSignal<any> = signal(null);

  constructor() {
    effect( () => {
      if(this.typelocation()) {
        this.locationsService.getLocationList(this.typelocation()).subscribe(
          response => {
            console.log(response);
            this.locationsList.set(response);
          }
        )
      }
    })
  }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      const path = url[0]?.path;
      if ( path != "categories" ) {
        this.typelocation.set(path);
      }
     });
  }

}
