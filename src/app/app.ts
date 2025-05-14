import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [Header],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-header/>
    <!-- <router-outlet /> -->
  `,
  styles: [],
})
export class App {
  title = 'web-shop';
}
