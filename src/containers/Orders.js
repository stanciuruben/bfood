import { connect } from 'react-redux';
import OrderItem from '../components/OrderItem';

const Orders = ({ orders }) => {
    

    return (
        <section id='orders' className='orders' >
            { orders.length < 1 && <p>You have no Orders</p> }
            { orders.length > 0 && orders.map( order => (
                <OrderItem id={ order.id } items={ order.items } key={ order.id  } />
            ) ) }
        </section>
    );
}

const mapStateToProps = state => ({
    orders: ( state.user ?? state.user.orders )
});

export default connect( mapStateToProps, null )( Orders );