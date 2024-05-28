import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FilterComponent} from '../../widgets/categories-page/filter/filter.component';
import {LocationFeedComponent} from '../../widgets/categories-page/location-feed/location-feed.component';

@Component({
    selector: 'app-categories',
    standalone: true,
    templateUrl: 'categories.component.html',
    styleUrl: 'categories.component.scss',
  imports: [FilterComponent, LocationFeedComponent, FilterComponent, LocationFeedComponent]
})
export default class CategoriesComponent implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);

  title: string = 'Цікаві локації';

  ngOnInit(): void {
   this.route.url.subscribe(url => {
    const path = url[0]?.path;

    switch (path) {
      case 'barber-shops':
        this.title = 'Барбершопи';
        break;
      case 'coffee-shops':
        this.title = 'Кав\'ярні';
        break;
      case 'restaurants':
        this.title = 'Ресторани';
        break;
      default:
        this.title = 'Цікаві локації';
    }
   });
  }
}
