import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: 'filter.component.html',
  styleUrl: 'filter.component.scss'
})
export class FilterComponent {
  changeRoute(path: string) {
    window.location.href = path;
  }
}
