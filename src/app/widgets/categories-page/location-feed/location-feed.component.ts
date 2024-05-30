import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  effect,
  inject,
  signal,
  OnInit
} from '@angular/core';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import {CardComponent} from './ui/card/card.component';
import {locationsService} from './api/locations.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-feed',
  standalone: true,
  imports: [CardComponent, NzPaginationModule],
  templateUrl: 'location-feed.component.html',
  styleUrl: 'location-feed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationFeedComponent implements OnInit {
  private locationsService: locationsService = inject(locationsService);
  private route: ActivatedRoute = inject(ActivatedRoute);

  page: WritableSignal<number> = signal(1);

  locationsList: WritableSignal<any> = signal(null);

  category: WritableSignal<string> = signal('');

  constructor() {
    effect(() => {
      this.locationsService.getLocationList(this.category(), this.page()).subscribe(
        response => {
          this.locationsList.set(response);
        }
      )
    })
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.category.set(params['category'])
      console.log(this.category());

      this.page.set(1);
    });
  }

  changePages(indexPage: number) {
    this.page.set(indexPage);
  }
}
