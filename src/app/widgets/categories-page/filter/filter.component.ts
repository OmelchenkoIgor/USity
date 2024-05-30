import {ChangeDetectionStrategy, Component, EventEmitter, Output, effect, inject} from '@angular/core';
import {NzSegmentedComponent} from 'ng-zorro-antd/segmented';
import { ActivatedRoute, Router } from '@angular/router';
import { currentCategory } from '../../../shared/utils/currentCategory';
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
  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

  @Output() selectedCategory: EventEmitter<number>  = new EventEmitter<number>();
  category: string[] = ['Всі', 'Ресторани', 'Кав`ярні', 'Барбершопи'];

  navigateToCategory(index: number) {
    this.router.navigate(['./categories'], { queryParams: { category: currentCategory(index) } });
  }

  constructor() {
    effect(() => {
       this.route.queryParams.subscribe((params: any) => {
        this.category = params['category'] || '';
        console.log(this.category);
      })
    })
  }
}
