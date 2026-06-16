let cart = [];

let buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach(button => {
  button.addEventListener("click", function () {
    
    let name = this.getAttribute("data-name");
    let price = this.getAttribute("data-price");

    let product = {
      name: name,
      price: price
    };

    cart.push(product);

    console.log("Added to cart:", product);
    console.log("Current Cart:", cart);

    alert(name + " added to cart!");
  });
});
