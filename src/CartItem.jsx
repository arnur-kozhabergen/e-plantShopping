import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity, selectCartCount, selectCartTotal } from './CartSlice';
import PlantImage from './PlantImage';
export default function CartItem({ onContinueShopping }) {
  const cart = useSelector(state => state.cart.items);
  const count = useSelector(selectCartCount);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const [checkoutMessage, setCheckoutMessage] = useState('');
  const calculateTotalCost = item => item.price * item.quantity;
  return <main className="page-shell cart-page">
    <p className="eyebrow">Your growing collection</p><h1>Shopping Cart</h1>
    <p className="cart-intro">{count} {count === 1 ? 'plant' : 'plants'} selected. A little green is on its way.</p>
    {cart.length === 0 ? <section className="empty-cart"><h2>Your next leaf is waiting.</h2><p>Your cart is empty. Browse the collection to find your first plant.</p></section> :
    <div className="cart-layout"><div className="cart-lines">{cart.map(item => <article className="cart-item" key={item.id}>
      <PlantImage plant={item}/><div className="cart-item-details"><h2>{item.name}</h2><p>Unit price: ${item.price.toFixed(2)}</p>
        <div className="quantity-controls"><button aria-label={'Decrease ' + item.name} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button><output aria-label={item.name + ' quantity'}>{item.quantity}</output><button aria-label={'Increase ' + item.name} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button></div>
        <button className="delete-button" onClick={() => dispatch(removeItem(item.id))}>Delete <span className="sr-only">{item.name}</span></button>
      </div><p className="line-total">Total: ${calculateTotalCost(item).toFixed(2)}</p>
    </article>)}</div><aside className="order-summary"><p className="eyebrow">At a glance</p><h2>Order summary</h2><p>Total quantity <strong>{count}</strong></p><p className="grand-total">Total Cart Amount <strong>${total.toFixed(2)}</strong></p><button className="primary-button" onClick={() => setCheckoutMessage('Coming Soon — checkout is a demonstration. No order or payment has been placed.')}>Checkout</button><p role="status">{checkoutMessage}</p></aside></div>}
    <button className="secondary-button continue-button" onClick={onContinueShopping}>Continue Shopping <span aria-hidden="true">→</span></button>
  </main>;
}
