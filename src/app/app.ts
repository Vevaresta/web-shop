import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { ProductsList } from "./pages/products-list/products-list";

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  template: `
    <app-header/>
    <!-- <app-products-list/> -->
    <router-outlet />
  `,
  styles: [],
})
export class App {
  title = 'web-shop';
}
