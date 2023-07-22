import React from 'react';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";

const Cart = () => {
    const data =
    [
      {
      id:1,
      img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title:"Long sleeve graphic T-shirt",
      desc:"Old fashion tshirt",
      isNew:true,
      oldPrice:19,
      price:122,
      },
      {
        id:2,
        img:"https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title:"Hat",
        desc:"Old fashion tshirt",
        isNew:true,
        oldPrice:19,
        price:1200,
        },
    ]
  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data?.map(item=>(
            <div className="item" key={item.id}>
               <img src={item.img} alt="#"/> 
               <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc.substring(0,100)}</p>
                <div className="price">
                    1× ₹{item.price}
                </div>
               </div>
               <DeleteOutlinedIcon className="delete"/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>₹1200</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart;