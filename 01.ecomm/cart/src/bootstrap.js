import { faker } from '@faker-js/faker';


const mount = (el) => {
    el.innerHTML = `Your cart have ${faker.number.int()} items`
}


if (process.env.NODE_ENV === 'development') {
    const div101 = document.getElementById("cart-container");

    if (div101) {
        mount(div101)
    }
}

export { mount }