import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: 'navigation.component.html',
  styleUrl: 'navigation.component.scss'
})
export class NavigationComponent {
  changeRoute(route: string) {
    window.location.href = route;
  }
}
