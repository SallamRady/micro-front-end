import { faker } from '@faker-js/faker';

const divContainer = document.getElementById('cart-container');

divContainer.innerHTML = `Your cart have ${faker.number.int()} items`