import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <app-header/>
    <router-outlet/>
    <app-footer/>
  `,
    styles: [],
    imports: [RouterOutlet, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'USity project';
}
