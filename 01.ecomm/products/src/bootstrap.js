import { faker } from '@faker-js/faker';



const mount = (el) => {
    let products = "";
    for (let i = 0; i < 3; i++) {
        let productName = `${faker.commerce.productName()}`;
        products += `<div>${productName}</div>`;
    }
    el.innerHTML = products;
}

if (process.env.NODE_ENV === 'development') {
    const div101 = document.getElementById("products-list");

    if (div101) {
        mount(div101)
    }
}


export { mount };
