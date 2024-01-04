import React from 'react'
import '../cartnav.css'
import { BiSolidCart } from "react-icons/bi";

const CartNav = () => {
    
  return (
    <>
      <nav id='cart-navbar'>
        <aside className='cart-side-1'>
            <img src="https://assets.market-storefront.envato-static.com/storefront/assets/logos/envato-market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg" height="30%" alt="" />
        </aside>
        <aside className='cart-side-2'>
            <section className='cart-details'>
                <div className="detail-box1">
                    Create an Envato Account
                </div>
                <div className="detail-box2">
                    <BiSolidCart />
                </div>
                <div className="detail-box3">
                    Sign In
                </div>
            </section>
        </aside>
      </nav>  
    </>
  )
}

export default CartNav