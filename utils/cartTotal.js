// for sum of cart
function calculateCartTotal(cartItems){
    const total = products.reduce((previousValue, currentValue)=>{
       previousValue +=currentValue.product.price * currentValue.product.quantity;
       return previousValue;
    },0);
  
    const cartTotal = ((total*100)/100).toFixed(2);
  
    return{
      cartTotal
    }
  }
  export default calculateCartTotal