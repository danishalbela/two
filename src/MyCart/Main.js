import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar"
class Main extends React.Component{


    constructor(){
        super()

        this.state = {
            products:[
                {
                    id:1,
                    price:10,
                    title:"Refrigrator",
                    qty:1,
                    img:"https://media.istockphoto.com/id/464846509/photo/refrigrator.webp?b=1&s=170667a&w=0&k=20&c=E2Kp2e4q8-voWGkfw64SjZarQDUj2uLgiyofTEWa-3g="
                },
                {
                    id:2,
                    price:100,
                    title:"coolar",
                    qty:1,
                    img:"https://media.istockphoto.com/id/1333600763/photo/blank-heavy-duty-shipment-wooden-box-template.webp?b=1&s=170667a&w=0&k=20&c=g3tGCaO4Q7ffxT5SnRVGGf6FsKtVLTdVMXhlKGA7_9k="
                },
                {
                    id:3,
                    price:1000,
                    title:"Washing Mchine",
                    qty:1,
                    img:"https://media.istockphoto.com/id/1222905399/photo/woman-is-doing-laundry.webp?b=1&s=170667a&w=0&k=20&c=XsSvwQeiyAuYKQNmo0N3av6dnF0S5DuI5En66SkA3Yo="
                },
            ]
        }
        // console.log(this.state)
        this.handleIncQty = this.handleIncQty.bind(this)
        this.handleDecQty = this.handleDecQty.bind(this)
        this.handleDelQty = this.handleDelQty.bind(this)
    }

   handleIncQty(para)
   {
    // console.log(para)
    let {products} = this.state
    let index = this.state.products.indexOf(para)
      
   products[index].qty += 1
   this.setState({products:products})
   
   }
   handleDecQty(para)
   {
    console.log(para)
    let {products} = this.state
    let index = this.state.products.indexOf(para)
      
    if(products[index].qty===0) return null
   products[index].qty -= 1
   
   this.setState({products:products})
   
   }

   handleDelQty(para)
   {
    console.log(para)

    let {products} = this.state
    let newProducts = products.filter(ele=>{
        return ele.id !==para
    })
    console.log(newProducts)
    this.setState({products:newProducts})
   }

   getCartCount(){
    let {products} = this.state
    let count = 0
    products.forEach(ele=>{
        count += ele.qty
    })
    return count
   }

   getCartTotal()
   {
    let {products} = this.state
    let cartTotal =0

    products.forEach(ele=>{
        cartTotal = cartTotal+ele.qty*ele.price
    })
    return cartTotal
   }

    render(){

        let {products}=this.state

        return(
            <div style={{border:'7px solid red'}}>
                <h1>MAIN</h1>
                <Navbar getCartCount = {this.getCartCount()}

                />
                <Cart
                    products={products}
                    handleIncQty={this.handleIncQty}
                    handleDecQty={this.handleDecQty}
                    handleDelQty={this.handleDelQty}
                />
               <hr/>
               <h1>
                Total = ${this.getCartTotal()}
               </h1>
            </div>
        )
    }
}
export default Main