const div101 = document.getElementById("products-list");

let products = "";

for (let i = 0; i < 3; i++) {
  let productName = `Product ${i * Math.random() * 100}`;
  products += `<div>${productName}</div>`;
}

div101.innerHTML = products;
