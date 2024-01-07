import React from "react";
import Cart from "./Cart";

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
    }

   handleIncQty(para)
   {
    console.log(para)
   }

    render(){

        let {products}=this.state

        return(
            <div style={{border:'7px solid red'}}>
                <h1>MAIN</h1>
                <Cart
                    products={products}
                    handleIncQty={this.handleIncQty}
                />
            </div>
        )
    }
}
export default Main