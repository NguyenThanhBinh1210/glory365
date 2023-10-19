/* eslint-disable @typescript-eslint/no-explicit-any */
export const setCartFromLS = (cart: any) => {
  localStorage.setItem('cart', JSON.stringify(cart))
}
export const getCartFromLS = () => {
  const result = localStorage.getItem('cart')
  return result ? JSON.parse(result) : null
}
// export const removeCartFromLS = () => {
//   localStorage.removeItem('cart', JSON.stringify(cart_id))
// }

