import { Component, WritableSignal, effect, inject, signal } from '@angular/core';
import { newsService } from './api/news.service';

@Component({
  selector: 'app-all-offers',
  standalone: true,
  imports: [],
  templateUrl: 'all-offers.component.html',
  styleUrl: 'all-offers.component.scss'
})
export class AllOffersComponent {
  private newsService: newsService = inject(newsService);

  newsList: WritableSignal<any> = signal(null);

  constructor() {
    effect(() => {
      this.newsService.getNewsList().subscribe((response) => {
        this.newsList.set(response);
        console.log(response);
      })
    })
  }

  changeRoute(route: string) {
    window.location.href = "news/" + route;
  }
}
