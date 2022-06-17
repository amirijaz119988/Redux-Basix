import { connect } from 'react-redux';
import Home from '../component/HomeComponent';
import { addtocart } from '../service/actions/action';


const mapStateToProp=state=>({
    cartData:state
})

const mapDispatchToProps=dispatch=>({
    addToCartHandeler:data=>dispatch(addtocart(data))
})

export default connect(mapStateToProp, mapDispatchToProps)(Home)