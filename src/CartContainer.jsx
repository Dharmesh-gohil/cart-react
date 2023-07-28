import CartItem from './CartItem';
import { useGlobalContext } from './Context';
import cartItems from './data';
const CartContainer = () => {
  const { cart,clearCart } = useGlobalContext()
  // console.log(cart)
  // const cartArray = [...cartItems];
  // this array.from will convert that object into the array 
  const cartArray = Array.from(cart.entries())
  // console.log(cartArray)
  if (cartArray.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          // console.log(cartItem)
          //,here cartItem become array of array so
          // first we do destructure of array then we use that value 
          const [id,item]=cartItem
          return <CartItem key={id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            total <span>$10</span>
          </h5>
        </div>
        <button
          className='btn btn-hipster'
          onClick={clearCart}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
