import { CartItem } from '../models/cart-item';
import { Cart } from '../models/cart.model';

export class CartUtil {
    public static get(): Cart {
        // Recupera os dados do LocalStorage
        const data = localStorage.getItem('petshopcart');

        // Caso não haja dados, retorna um novo carrinho
        if (!data)
            return new Cart();

        // Caso haja dados, retorna o carrinho
        return JSON.parse(data);
    }

    public static add(id: string, product: string, quantity: number, price: number, image: string) {
        // Obtém o carrinho
        let cart = this.get();

        // Gera o novo item
        const item = new CartItem(id, product, quantity, price, image);

        // Adiciona ao carrinho
        cart.items.push(item);

        // Salva no localStorage
        localStorage.setItem('petshopcart', JSON.stringify(cart));
    }

    public static update(cart: Cart) {
        // Salva no localStorage
        localStorage.setItem('petshopcart', JSON.stringify(cart));
    }

    public static clear() {
        localStorage.removeItem('petshopcart');
    }
}