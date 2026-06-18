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
function startPayment(){

if(cart.length===0){

alert("Your cart is empty!");

return;

}

/*
Future:
Send cart data to backend
Backend creates payment session
Redirect customer to payment page
*/

alert(
"Online payment setup ready.\nNext step: connect payment gateway."
);

}
