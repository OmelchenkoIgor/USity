import { Component, InputSignal, inject, input } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NzCarouselModule],
  templateUrl: 'card.component.html',
  styleUrl: 'card.component.scss'
})
export class CardComponent {
  private router: Router = inject(Router);
  data: InputSignal<any> = input.required<any>();

  redirectToLocation(id: string) {
    console.log(['/location', id])
    this.router.navigate(['/location', id]);
  }
}
