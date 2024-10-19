import { faker } from '@faker-js/faker';

const div101 = document.getElementById("products-list");

let products = "";

for (let i = 0; i < 3; i++) {
    let productName = `${faker.commerce.productName()}`;
    products += `<div>${productName}</div>`;
}

div101.innerHTML = products;
