import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [],
  templateUrl: 'description.component.html',
  styleUrl: 'description.component.scss'
})
export class DescriptionComponent {
  @Input() location: any;
}
