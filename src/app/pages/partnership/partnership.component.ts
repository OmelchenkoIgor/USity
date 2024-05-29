import { Component } from '@angular/core';
import { InfographicsComponent } from "../../widgets/partnership-page/infographics/infographics.component";
import { BannerComponent } from "../../widgets/partnership-page/banner/banner.component";
import { AnnouncementComponent } from "../../widgets/partnership-page/announcement/announcement.component";
import { FormComponent } from "../../widgets/partnership-page/form/form.component";

@Component({
    selector: 'app-partnership',
    standalone: true,
    templateUrl: 'partnership.component.html',
    styleUrl: 'partnership.component.scss',
    imports: [InfographicsComponent, BannerComponent, AnnouncementComponent, FormComponent]
})
export default class PartnershipComponent {

}
