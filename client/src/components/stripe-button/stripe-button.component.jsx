import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeButton = ({ price }) => {
    
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_9OvlNV7hX01KFaamOb6ArLVd00anMGYkuj'

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
        .then(res => {
            alert('Payment Succesful')
        })
        .catch(err => {
            console.error('Payment Error', JSON.parse(err))
            alert('There was an issue with your payment. Please sure you use the provided credit card.')
        })

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
