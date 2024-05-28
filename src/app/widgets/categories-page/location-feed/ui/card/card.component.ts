import { Component, InputSignal, effect, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: 'card.component.html',
  styleUrl: 'card.component.scss'
})
export class CardComponent {
  data: InputSignal<any> = input.required<any>();

}
