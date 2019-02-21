var stripe = Stripe('pk_test_z3mNqKTQ5epnFsktGcRVS3Ww', {
  betas: ['checkout_beta_4']
});

var checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', function () {
  // When the customer clicks on the button, redirect
  // them to Checkout.
  stripe.redirectToCheckout({
    items: [{
      sku: 'sku_EZK9v982ntnuPd',
      quantity: 1
    }],

    // Note that it is not guaranteed your customers will be redirected to this
    // URL *100%* of the time, it's possible that they could e.g. close the
    // tab between form submission and the redirect.
    successUrl: 'https://mikeandleannewedding2019.github.io/success',
    cancelUrl: 'https://mikeandleannewedding2019.github.io/canceled',
  })
    .then(function (result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
});