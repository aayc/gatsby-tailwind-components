import React from "react"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(
  "pk_test_51HDsqIBkhlQXCwJQDpObex354odlErxhx9zE4OFfTFEH8MmdTRBPQv9f8uppY52AMN32zFe0cL7JlahqpuOjLpm2000bwPEHdf"
)

const redirectToCheckout = async event => {
  event.preventDefault()
  console.log("hey!")
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: "price_1HDsrkBkhlQXCwJQmmlOBvcO", quantity: 1 }],
    mode: "payment",
    shippingAddressCollection: {
      allowedCountries: ["US", "CA"],
    },
    // TODO use unlocalized
    successUrl: `http://localhost:8000/purchased`,
    cancelUrl: `http://localhost:8000/`,
  })

  if (error) {
    console.warn("Error:", error)
  }
}

const Checkout = () => {
  return (
    <button onClick={redirectToCheckout} className="green-button">
      9 Buy for $39.99
    </button>
  )
}

export default Checkout
