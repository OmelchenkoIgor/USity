import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [],
  templateUrl: 'information.component.html',
  styleUrl: 'information.component.scss'
})
export class InformationComponent {
  @Input() location: any;
}
