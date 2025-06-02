import { Routes } from '@angular/router';
import { ProductsList } from './pages/products-list/products-list';
import { CartComponent } from './pages/cart-component/cart-component';

export const routes: Routes = [{
    path: "",
    pathMatch: "full",
    component: ProductsList
},
{
    path: 'cart',
    component: CartComponent
}
];
