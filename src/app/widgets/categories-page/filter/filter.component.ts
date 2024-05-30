import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, effect, inject} from '@angular/core';
import {NzSegmentedComponent} from 'ng-zorro-antd/segmented';
import { ActivatedRoute, Router } from '@angular/router';
import { currentCategoryIndex, currentCategoryName } from '../../../shared/utils/currentCategory';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    FormsModule,
    NzSegmentedComponent
  ],
  templateUrl: 'filter.component.html',
  styleUrl: 'filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit {
  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);
  
  categoryIndex = 1;
  category: string = '';
  categoryNames: string[] = ['Всі', 'Ресторани', 'Кав`ярні', 'Барбершопи'];

  navigateToCategory(index: number) {
    this.router.navigate(['./categories'], { queryParams: { category: currentCategoryName(index) } });
  }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.category = params['category'] || '';
      this.categoryIndex = currentCategoryIndex(this.category);
    })
  }
}
