import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import './css/PlaceOrder.css'

export const PlaceOrder = () => {
    const{getTotalCartAmount} = useContext(ShopContext);
  return (
    <form action="" className="place-order">
        <div className="place-order-left">
            <p className="title">Delivery Information</p>
            <div className="multi-fields">
                <input name='firstName'  type="text" placeholder='First Name'/>
                <input name='lastName'  type="text" placeholder='Last Name'/>
            </div>
            <input name='email'  type="email" placeholder='Email Address'/>
            <input name='street'  type="text" placeholder='Street'/>
            <div className="multi-fields">
                <input name='city'  type="text" placeholder='City'/>
                <input name='state'  type="text" placeholder='State'/>
            </div>
            <div className="multi-fields">
                <input name='pincode'  type="text" placeholder='Pin Code'/>
                <input name='country'  type="text" placeholder='Country'/>
            </div>
            <input name='phone'  type="text" placeholder='Phone' />
        </div>
        <div className="place-order-right">
        <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>Rs. {getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Rs. {getTotalCartAmount()===0?0:"FREE"}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>Rs.{getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button type='submit'> PROCEED TO PAYMENT </button>
            </div>
        </div>
    </form>
  )
}