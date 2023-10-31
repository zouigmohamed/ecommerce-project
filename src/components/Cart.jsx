import { useSelector } from "react-redux";
function Cart() {
  const cart = useSelector((state)=> state.cart)
  return (
    <div>
{console.log(cart.products.length)}
    </div>
  )
}

export default Cart