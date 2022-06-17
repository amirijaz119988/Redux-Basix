import { connect } from 'react-redux';
import Cart from '../component/CartComponent';


const mapStateToProp=state=>({
    cartData:state
})

const mapDispatchToProps=dispatch=>({
})

export default connect(mapStateToProp, mapDispatchToProps)(Cart)