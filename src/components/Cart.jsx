import { useSelector } from "react-redux";

function Cart() {
  const cartValue = useSelector((state) => state.cart.value); // Access the 'value' field
  return (
    <div>
      <h1>Cart</h1>
      <p>Cart Value: {cartValue}</p>
    </div>
  );
}

export default Cart;
