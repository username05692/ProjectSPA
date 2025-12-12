import { Component, signal } from '@angular/core';
import { LayoutComponent } from './layout/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent],
  template: `
    <app-layout></app-layout>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
