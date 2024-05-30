import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  effect,
  inject,
  signal,
  input,
  InputSignal,
  untracked,
  OnInit
} from '@angular/core';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import {CardComponent} from './ui/card/card.component';
import {locationsService} from './api/locations.service';
import {currentCategory} from '../../../shared/utils/currentCategory';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-feed',
  standalone: true,
  imports: [CardComponent, NzPaginationModule],
  templateUrl: 'location-feed.component.html',
  styleUrl: 'location-feed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationFeedComponent {
  private locationsService: locationsService = inject(locationsService);
  private route: ActivatedRoute = inject(ActivatedRoute);

  index: InputSignal<number> = input.required();
  page: WritableSignal<number> = signal(1);

  locationsList: WritableSignal<any> = signal(null);

  category: any = [];

  constructor() {
    effect(() => {
      if(this.index()) {
       
        untracked(() => {
          this.page.set(1);
        })
       
        console.log(this.page());
      }
    })

    effect(() => {
      this.route.queryParams.subscribe(params => {
        this.category = params['category'] || '';
        console.log(this.category);
  
  
        this.locationsService.getLocationList(this.category, this.page()).subscribe(
          response => {
            this.locationsList.set(response);
          }
        )
  
  
        // this.displayProductsData = [];
  
        // if (this.filter != '') {
        //   for (let i = 0; i < this.productsData.length; i++) {
        //     if (this.productsData[i].type === this.filter) {
        //       this.displayProductsData.push(this.productsData[i]);
        //     }
        //   }
        // } else {
        //   this.displayProductsData = this.productsData;
        // }
      });
    })
  }

  changePages(indexPage: number) {
    this.page.set(indexPage);
  }
}
