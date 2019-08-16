import React from 'react'
import { connect } from 'react-redux'

import CustomButtom from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-items.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
    {
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
    }
    </div>
    <CustomButtom>GO TO CHECKOUT</CustomButtom>
  </div>
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown)
