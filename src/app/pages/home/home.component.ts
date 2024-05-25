import { Component } from '@angular/core';
import { BannerComponent } from '../../widgets/banner/banner.component';
import { RecomendationsComponent } from '../../widgets/recomendations/recomendations.component';
import { NewsComponent } from "../../widgets/news/news.component";
import { RelevantComponent } from "../../widgets/relevant/relevant.component";
import { AdvertisementComponent } from "../../widgets/advertisement/advertisement.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.scss',
    imports: [
        BannerComponent,
        RecomendationsComponent,
        NewsComponent,
        RelevantComponent,
        AdvertisementComponent
    ]
})
export default class HomeComponent {

}
