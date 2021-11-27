import { connect } from 'react-redux';

const Cart = ({ cart }) => (
    <div>
        <button>Cart</button>
        <dl>
            { cart.map( item => 
                <dt id={ item.id } >
                    <h4>{ item.name }</h4>
                    <div>
                        <button>-1</button>
                        <input type="number" name="ammount" value={ item.ammount } />
                        <button>+1</button>
                    </div>
                    { item.extras.map( extraItem => <dd>{ extraItem }</dd> ) }
                    <button>Order Now!</button>
                </dt>
            ) }
        </dl>
    </div>
);

const mapStateToProps = state => ({ cart: state.cart });

export default connect( mapStateToProps, null )( Cart );