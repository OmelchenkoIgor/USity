import { ChangeDetectionStrategy, Component, WritableSignal, effect, inject, signal } from '@angular/core';
import { CardComponent } from './ui/card/card.component';
import { locationsService } from './api/locations.service';

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
export class LocationFeedComponent {
  private locationsService: locationsService = inject(locationsService);

  typelocation: WritableSignal<string> = signal('api');
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

}
