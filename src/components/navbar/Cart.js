import { connect } from 'react-redux';

function Cart( props ) {
    return (
        <div>
            <button>Cart</button>
            <dl>
                { props.cart.map( item => 
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
}

function mapStateToProps( state ) {
    return { cart: state.cart };
}

export default connect( mapStateToProps, null )( Cart );