import React from "react";

function Home(props){
    return(
        <div>
            <div>
                <h2>Iphone</h2>
                <p>4000</p>
                <button onClick={()=>props.addToCartHandeler({Name:"Iphone", Price:"4000"})}>Add To Cart</button>
            </div>
        </div>
    )
}
export default Home