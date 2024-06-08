import { Component, WritableSignal, effect, inject, signal } from '@angular/core';
import { referenceBookService } from './api/reference-book.service';

@Component({
  selector: 'app-reference-book',
  standalone: true,
  imports: [],
  templateUrl: 'reference-book.component.html',
  styleUrl: 'reference-book.component.scss'
})
export default class ReferenceBookComponent {
  private referenceBookService: referenceBookService = inject(referenceBookService);

  referenceBookList: WritableSignal<any> = signal(null);

  constructor() {
    effect(() => {
      this.referenceBookService.getReferenceBookList().subscribe(
        responce => {
          this.referenceBookList.set(responce);
          console.log(responce);
        }
      )
    })
  }
}
