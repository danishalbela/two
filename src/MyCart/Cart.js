import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor(props)
    {
        super(props)
        // console.log(this.props)
    }

    render() 
    {
        let {products,handleIncQty} = this.props
        return(
            <div>
                <h1>CART</h1>
                {
                  products.map((product)=>{
                    return <CartItem
                        key={product.id}
                        product={product}
                        handleIncQty = {handleIncQty}
                    />

                  })
                }
            </div>
        )
    }
}

export default Cart