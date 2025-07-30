import { Component } from '@angular/core';

import { CardListComponent } from './components/card-list/card-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'card-app';
}
