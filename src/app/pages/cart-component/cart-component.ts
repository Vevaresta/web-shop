import { Component, inject } from '@angular/core';
import { Cart } from '../../services/cart';
import { CartItemsList } from "../cart-items-list/cart-items-list";
import { OrderSummary } from "../cart/order-summary/order-summary";

@Component({
  selector: 'app-cart-component',
  imports: [CartItemsList, OrderSummary],
  template: `
    <div class="p-6 flex flex-col gap-4">
      <h2 class="text-2xl">Shopping Cart</h2>
      @for (item of cartService.cart(); track item.id) 
      {
        <app-cart-items-list [item]="item"/>
      }
      <app-order-summary/>
    </div>
  `,
  styles: ``
})
export class CartComponent {
  
  cartService = inject(Cart)
}
