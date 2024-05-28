import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: 'header.component.html',
  styleUrl: 'header.component.scss'
})
export class HeaderComponent {
  changeRoute(route: string) {
    window.location.href = route;
  }
  menuActive = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

}
