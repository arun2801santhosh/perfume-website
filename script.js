let cart = [];

let buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach(button => {
  button.addEventListener("click", function () {
    
    let name = this.getAttribute("data-name");
    let price = Number(this.getAttribute("data-price"));

    let product = { name, price };

    cart.push(product);

    updateCart();
  });
});

function updateCart() {
  let cartContainer = document.getElementById("cart-items");
  let totalContainer = document.getElementById("cart-total");

  cartContainer.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    cartContainer.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <span>$${item.price}</span>
      </div>
    `;
  });

  totalContainer.innerText = "Total: $" + total;
}
