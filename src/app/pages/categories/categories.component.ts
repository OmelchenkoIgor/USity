import {Component, OnInit, inject, signal, WritableSignal} from '@angular/core';
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
export default class CategoriesComponent {
  indexCategory: WritableSignal<number> = signal(0);

  title: string = 'Цікаві локації';
}
