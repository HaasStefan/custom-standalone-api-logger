import { Component, inject } from '@angular/core';
import { Logger } from './logger/logger.service';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly logger = inject(Logger);

  constructor() {
    this.logger.log('AppComponent created');
  }
}
