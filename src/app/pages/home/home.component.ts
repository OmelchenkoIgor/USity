import { Component } from '@angular/core';
import { BannerComponent } from '../../widgets/banner/banner.component';
import { RecomendationsComponent } from '../../widgets/recomendations/recomendations.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    RecomendationsComponent
  ],
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.scss'
})
export default class HomeComponent {

}
