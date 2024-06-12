import { Component, WritableSignal, inject, signal } from '@angular/core';
import { newsService } from './api/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: 'news.component.html',
  styleUrl: 'news.component.scss'
})
export default class NewsComponent {
  private newsService: newsService = inject(newsService);
  private route: ActivatedRoute = inject(ActivatedRoute);

  newsData: WritableSignal<any> = signal(null);

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.newsService.getNewsData(url[1].path).subscribe(
        response => {
          this.newsData.set(response);
        }
      )
    });
  }

  changeRoute(route: string) {
    window.location.href = "location/" + route;
  }
}
