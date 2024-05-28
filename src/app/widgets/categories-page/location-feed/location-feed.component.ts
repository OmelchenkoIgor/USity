import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  effect,
  inject,
  signal,
  input,
  InputSignal
} from '@angular/core';
import {CardComponent} from './ui/card/card.component';
import {locationsService} from './api/locations.service';
import {currentCategory} from '../../../shared/utils/currentCategory';

@Component({
  selector: 'app-location-feed',
  standalone: true,
  imports: [CardComponent],
  templateUrl: 'location-feed.component.html',
  styleUrl: 'location-feed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationFeedComponent {
  private locationsService: locationsService = inject(locationsService);
  index: InputSignal<number> = input.required();

  locationsList: WritableSignal<any> = signal(null);

  constructor() {
    effect(() => {
      this.locationsService.getLocationList(currentCategory(this.index())).subscribe(
        response => {
          this.locationsList.set(response);
        }
      )
    })
  }
}
