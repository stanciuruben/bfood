import { connect } from 'react-redux';
import OrderItem from '../components/OrderItem';

const Orders = ({ orders }) => (
    <section id='orders' className='orders' >
        { orders.length < 1 && <p>You have no Orders</p> }
        { orders.map( order => (
            <OrderItem id={ order.id } items={ order.items } />
        ) ) }
    </section>
);

const mapStateToProps = state => ({
    orders: state.orders
});

export default connect( mapStateToProps, null )( Orders );