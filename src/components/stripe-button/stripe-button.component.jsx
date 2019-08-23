import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
    
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_9OvlNV7hX01KFaamOb6ArLVd00anMGYkuj'

    const onToken = token => {
        console.log(token)
        alert('Payment Succesful')
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Cloting Ltd.'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
)
}
export default StripeButton
