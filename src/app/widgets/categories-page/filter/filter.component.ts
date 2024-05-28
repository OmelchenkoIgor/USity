import {ChangeDetectionStrategy, Component, EventEmitter, Output, output} from '@angular/core';
import {NzSegmentedComponent} from 'ng-zorro-antd/segmented';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    NzSegmentedComponent
  ],
  templateUrl: 'filter.component.html',
  styleUrl: 'filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {
  @Output() selectedCategory: EventEmitter<number>  = new EventEmitter<number>();
  category: string[] = ['Всі', 'Ресторани', 'Кав`ярні', 'Барбершопи'];
}
