import { createSlice } from '@reduxjs/toolkit';
export const CartSlice = createSlice({
  name: 'cart', initialState: { items: [] },
  reducers: {
    addItem(state, action) {
      const plant = action.payload;
      if (!plant || typeof plant.id !== 'string' || !Number.isFinite(plant.price) || plant.price < 0) return;
      const existing = state.items.find(item => item.id === plant.id);
      if (existing) existing.quantity += 1;
      else state.items.push({ ...plant, quantity: 1 });
    },
    removeItem(state, action) { state.items = state.items.filter(item => item.id !== action.payload); },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload || {};
      if (!Number.isSafeInteger(quantity) || quantity < 0) return;
      const item = state.items.find(entry => entry.id === id);
      if (!item) return;
      if (quantity === 0) state.items = state.items.filter(entry => entry.id !== id);
      else item.quantity = quantity;
    },
  },
});
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export const selectCartCount = state => state.cart.items.reduce((count, item) => count + item.quantity, 0);
export const selectCartTotal = state => state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
export default CartSlice.reducer;
