import { CartItem } from './cart-item';

export class Cart {
    constructor(
        public items: CartItem[] = []
    ) {

    }
}