import React from "react";
import ci from './cartitem.module.css'
class CartItem extends React.Component {
    constructor(props)
    {
        super(props)
        console.log(props)
    }

    render() 
    {
        let {product,handleIncQty,handleDecQty,handleDelQty} = this.props
        return(
            <>
                <div style={{border:'2px solid green', marginTop:'20px'}}
                className={ci.cartitem}>
                
                   <div className="leftblock">
                      <img src={product.img} alt="" style={imgStyle.image}/>
                   </div>
                    
                   <div className="rightblock">
                       <h4>{product.title}</h4>
                       <h3>Quantity = {product.qty}</h3>
                       <h3>$ {product.price}</h3>

                       {/* icons start */}
                         <div className={ci.cartitemactions}>
              <img src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png" alt="" 
              className={ci.actionicons}
              onClick={()=>handleIncQty(product)}
              />
              <img src="https://cdn-icons-png.flaticon.com/128/9068/9068779.png" alt="" 
              className={ci.actionicons}
              onClick={()=>handleDecQty(product)}
              />
              <img src="https://cdn-icons-png.flaticon.com/128/9790/9790368.png" alt="" 
              className={ci.actionicons}
                onClick={()=>handleDelQty(product.id)}
              />
                         </div>
                       {/* icons end */}
                    </div>
                </div>
            </>
        )
    }
}

export default CartItem

const imgStyle = {
    image:{
      width:  "120px",
      height: "120px",
      borderRadius:"10px",
      border:"3px solid blue",
    },
    
}