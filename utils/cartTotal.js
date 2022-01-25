// for sum of cart


function calculateCartTotal(cartItems){
  const total = cartItems.reduce((previousValue, currentValue)=>{
  previousValue +=currentValue.product.price * currentValue.quantity;
  return previousValue;
  console.log(previousValue)
  },0);

  const cartTotal = ((total*100)/100).toFixed(2);

  return{
  cartTotal
  }
}
  export default calculateCartTotal;