import { Component } from '@angular/core';
import { SubscriptionComponent } from '../../widgets/offers-page/subscription/subscription.component';
import { NewestOffersComponent } from "../../widgets/offers-page/newest-offers/newest-offers.component";
import { AllOffersComponent } from "../../widgets/offers-page/all-offers/all-offers.component";

@Component({
    selector: 'app-offers',
    standalone: true,
    templateUrl: 'offers.component.html',
    styleUrl: 'offers.component.scss',
    imports: [
        SubscriptionComponent,
        NewestOffersComponent,
        AllOffersComponent
    ]
})
export default class OffersComponent {

}
