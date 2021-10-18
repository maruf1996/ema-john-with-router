import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProducts';
import ReviewItem from '../../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';

const OrderReview = () => {
    const [products]=useProduct();
    const [cart,setCart]=useCart(products);
    const history=useHistory();
    const handleRemove=key=>{
        const newCart=cart.filter(product=>product.key !== key);
        setCart(newCart);
        // removeFromDb(key);
    }

    const handlePlaceOrder=()=>{
        // setCart([]);
        // clearTheCart();
        history.push('/shipping');
    }

    return (
        <div className="shop-container">
           <div className="product-container">
            {
                cart.map(product=><ReviewItem 
                    handleRemove={handleRemove}
                    key={product.key}
                    product={product}
                ></ReviewItem>)
            }
           </div>
           <div className="cart-container">
               <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="btn-regular">Proceed to Shipping</button>
               </Cart>
           </div>
        </div>
    );
};

export default OrderReview;