import {defineStore} from "pinia";
import {ref} from "vue";

export const useCartStore = defineStore('cart', () => {
  const items = ref(JSON.parse(localStorage.getItem('cartItems')) ?? [])
  //add to cart
  const addItem = item => {
    const existingProduct = items.value.find(cartItem => cartItem.id === item.id);
    if (existingProduct) {
      existingProduct.count++;

    } else {
      item.count = 1;
      items.value.push(item);

    }

    localStorage.setItem('cartItems', JSON.stringify(items.value))
  }
   //remove from cart
  const removeItem = (product) => {
    const id = product.id
    const indexToBeDeleted = items.value.findIndex((item) => item.id === id)
    items.value.splice(indexToBeDeleted, 1)
    localStorage.setItem('cartItems', JSON.stringify(items.value))
  }
//increment
  const incrementQ = item => {
    const existingProduct = items.value.find(cartItem => cartItem.id === item.id);
    if (existingProduct) {
      existingProduct.count++;
    }

    localStorage.setItem('cartItems', JSON.stringify(items.value))
  }
  //decrement
   const decrementQ =item => {
    const indexToBeDeleted = items.value.find(cartItem => cartItem.id === item.id);
    if (indexToBeDeleted) {
      indexToBeDeleted.count--;
   if(indexToBeDeleted.count === 0){
    removeItem(item)
    }
    }

    localStorage.setItem('cartItems', JSON.stringify(items.value))
  }
 // clear the cart
 const clearCart = () => {
  items.value = [];
  localStorage.setItem('cartItems', JSON.stringify(items.value));
};
  return {items, addItem, removeItem,incrementQ,decrementQ,clearCart}
}, )
