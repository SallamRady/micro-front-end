import { mount as productsMount } from 'Products/ProductsIndex';
import { mount as cartMount } from 'Cart/cartshow';


const productsDiv = document.getElementById('products-list');
const cartDiv = document.getElementById('cart-container');

productsMount(productsDiv)
cartMount(cartDiv)