import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FilterComponent} from '../../widgets/categorie-page/filter/filter.component';
import {LocationFeedComponent} from '../../widgets/categorie-page/location-feed/location-feed.component';

@Component({
    selector: 'app-categories',
    standalone: true,
    templateUrl: 'categories.component.html',
    styleUrl: 'categories.component.scss',
  imports: [FilterComponent, LocationFeedComponent, FilterComponent, LocationFeedComponent]
})
export default class CategoriesComponent implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
   this.route.url.subscribe(url => {
    const path = url[0]?.path;
    console.log('Current route path:', path);
   });
  }
}
