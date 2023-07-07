import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const cartItems = cartList.length

      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <div className="cart-summary-container">
          <h1 className="order-total">
            Order Total: <span className="amount"> Rs {total}/-</span>
          </h1>
          <p className="items-in-cart">
            <span>{cartItems}</span> Items in cart
          </p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
