import React, {Fragment , useState , useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { removeFromCartAction } from "../../../redux/action";
import './Cart.css'

const Cart = () => {
    let selectedCartItem = useSelector((state)=> state?.cartProducts || []);
    const dispatch = useDispatch()
    const [quantityRange] = useState([1,2,3,4,5])
    const [updatedQuanty, setUpdatedQuanty ] = useState(1)
    const [multipliedValue , setMultipliedValue] = useState("")
    const [totalPrice , setTotalPrice ] = useState("")

    const selectedQuantity = (e,selectQuantity) => {
        let { value } = e.target
        let productValue = selectQuantity.price * value
        setMultipliedValue(productValue)
        setUpdatedQuanty(value)     
    }
  

    const deleteProduct = (product) => {
        let deletedProduct = selectedCartItem.filter(ele => ele.id !== product.id)
        dispatch(removeFromCartAction(deletedProduct)) 
    }

    const placeOrder = () => {
        document.getElementById("order").style.display = "block"
        setTimeout(() => {
            document.getElementById("order").style.display = "none"
        },2000)
        
    }

    return(
        <Fragment>
                <div className="basket-labels">
                    <ul>
                        <li className="item item-heading">Item</li>
                        <li className="price">Price</li>
                        <li className="quantity">Quantity</li>
                        <li className="subtotal">Subtotal</li>
                    </ul>
                </div>
                {selectedCartItem.map((ele,i) => {
                    console.log("ele",ele)
                    let {avatar = "" , price = "" , category = "" , name = "" } = ele || {}
                    return (
                        <div className="basket-product">
                            <div className="item">
                                <div className="product-image">
                                    <img src={avatar} alt="Placholder Image 2" className="product-frame" />
                                </div>
                            <div className="product-details">
                                <p><strong>{category}</strong></p>
                                <p>{name}</p>
                            </div>
                        </div>
                        <div className="price">{price}</div>
                            <div className="quantity">
                            <select onChange={(e) => selectedQuantity(e,ele)}>
                                   {quantityRange.map((ele,i) => {
                                        return(
                                            <option key={i} value={ele}>{ele}</option>
                                        )
                                    })}
                                </select>
                        </div>
                            <div className="subtotal">{price * updatedQuanty}</div>
                            <div className="remove">
                                <button>Remove</button>
                            </div>
                        </div>
                    )
                })}
                
            <aside>
                <div className="summary">
                    <div className="summary-total-items"><span className="total-items"></span> Items in your Bag</div>
                    <div className="summary-subtotal">
                    <div className="subtotal-title">Subtotal</div>
                    {/* <div className="subtotal-value final-value" id="basket-subtotal">{price * updatedQuanty}</div> */}
                    </div>
                    <div className="summary-total">
                    <div className="total-title">Total</div>
                    {/* <div className="total-value final-value" id="basket-total">{price * updatedQuanty}</div> */}
                    </div>
                    <div className="summary-checkout">
                    <button className="checkout-cta">Go to Secure Checkout</button>
                    </div>
                </div>
            </aside>

        </Fragment>


    )
}
export default Cart