import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: 'categories.component.html',
  styleUrl: 'categories.component.scss'
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
