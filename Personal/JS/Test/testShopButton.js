function checkout() {
    // checkout: clear the cart and redirect to PayPal checkout page 
    const cartTotal = calculate Total(); // calculate the total amount to pay
    const cartProducts = cartContent.querySelector("tbody").innerHTML;
    if (cartProducts !== "" && confirm ("Are you sure you want to checkout?")) {
        clearCart();
        window.location.href= https://www.paypal.com/checkout? amount=${cartTotal}& currency_code=USD`; // redirect to PayPal checkout page 
    } 
    else {
        return;
    }
}
  // bind the button that does the checkout both to the function that
// controls the checkout and and to the function that adjusts the total price
checkoutBtn.addEventListener("click", function(e) {
    e.preventDefault();
    checkout();
 });
  checkoutBtn.addEventListener("click", displayCartTotal);
})();


function checkout(){
    const cartTotal = calculateTotal();
    const cartProducts=cartContent.querySelector("tbody").innerHTML;
    if (cartProducts !== " " && confirm("Are you sure you want to checkout?")){
        clearCart();
        window.location.href='https://www.paypal.com/checkout?amount=${cartTotal}&currency_code=USD';
    } 
    else {
        return;
    }
}