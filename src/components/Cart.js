import { connect } from 'react-redux';
import { useState } from 'react';
import { 
    updateCart, 
    setCartVisibility, 
    setUserInfoVisibility, 
    dispatchOrder 
} from '../redux/actions';

const Cart = ( {
    cart, 
    updateCart, 
    isCartVisible, 
    setCartVisibility, 
    setUserInfoVisibility,
    dispatchOrder 
} ) => {
    const [ warning, setWarning ] = useState( null );

    const displayWarning = ( message, type ) => {
        setWarning( { message, type } );
        setTimeout( () => setWarning( null ), 3000 );
    }

    const cartAnimation = () => {
        document.getElementById( 'cart' ).classList.remove('on-cart-load');
        setTimeout( () => {
            document.getElementById( 'cart' ).classList.add('on-cart-load');
        }, 0 );
        setTimeout( () => {
            document.getElementById( 'cart' ).classList.remove('on-cart-load');
        }, 1000 );
    }

    const changeAmmount = ( method, id ) => {
        const newCart = [ ...cart ];
        const newCartItem = JSON.parse( JSON.stringify( newCart.find( item => item.id === id ) ) );
        let newAmmount = method === 'increase' ? newCartItem.ammount + 1 : newCartItem.ammount - 1;
        newAmmount = newAmmount < 1 ? 1 : newAmmount;
        newCartItem.ammount = newAmmount;
        newCartItem.totalPrice = newCartItem.price * newAmmount;
        const itemIndex = newCart.findIndex( item => item.id === id );
        delete newCart[ itemIndex ];
        newCart[ itemIndex ] = newCartItem;
        updateCart( newCart );
    }

    const removeItem = ( id ) => {
        const newCart = [ ...cart ];
        const indexToRemove = newCart.findIndex( item => item.id === id );
        newCart.splice( indexToRemove, 1 );
        updateCart( newCart );
        cartAnimation();
    }

    const makeOrder = async () => {
        const response = await fetch( '/dispatch-order', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify( cart )
        } );
        const result = await response.json();
        if ( result.type ) {
            displayWarning( result.message, result.type );
            if ( result.type === 'success' ) {
                cartAnimation();
                dispatchOrder();
            }
            return;
        }
        setUserInfoVisibility( true );
        setCartVisibility( false );
    }

    return (
        <section id="cart" className={'cart on-cart-load' + ( isCartVisible ? '' : ' collapse-cart') } >
            <button className="cart__headline" title="Close Cart" onClick={ () => setCartVisibility( !isCartVisible ) } >
                Cart { cart.length > 0 && <span className="cart__headline__nr" >{ cart.length }</span> }
                <svg viewBox="0 0 50 50">
                    <path d="M 25 2 C 12.316406 2 2 12.316406 2 25 C 2 37.683594 12.316406 48 25 48 C 37.683594 48 48 37.683594 48 25 C 48 12.316406 37.683594 2 25 2 Z M 35.707031 22.707031 L 25.707031 32.707031 C 25.511719 32.902344 25.257813 33 25 33 C 24.742188 33 24.488281 32.902344 24.292969 32.707031 L 14.292969 22.707031 C 13.902344 22.316406 13.902344 21.683594 14.292969 21.292969 C 14.683594 20.902344 15.316406 20.902344 15.707031 21.292969 L 25 30.585938 L 34.292969 21.292969 C 34.683594 20.902344 35.316406 20.902344 35.707031 21.292969 C 36.097656 21.683594 36.097656 22.316406 35.707031 22.707031 Z"></path>
                </svg>
            </button>
            { warning && <div className={ 'cart__warning cart__warning-' + warning.type } >{ warning.message }</div> }
            <dl className="cart__items-container">
                { cart.length > 0 ? cart.map( item => (
                    <div className="cart__item" key={ 'cart-item-' + item.id }>
                        <dt className="cart__item__title" >{ item.name }</dt>
                        <div className="cart__item__controls">
                            <button className="cart__item__button" onClick={ () => changeAmmount( 'decrease', item.id ) } >-1</button>
                            <p className="cart__item__ammount" >{ item.ammount }</p>
                            <button className="cart__item__button" onClick={ () => changeAmmount( 'increase', item.id ) } >+1</button>
                            <button className="cart__item__button--delete" title="Remove Item" onClick={ () => removeItem( item.id ) } >
                                <svg preserveAspectRatio="xMaxYMin meet" viewBox="0 0 512 512">
                                    <path d="M 231.48828 8.1992188 
                                            A 36.456 36.456 0 0 0 195.30664 36.855469 
                                            L 192.39062 50.169922 
                                            L 145.7168 39.947266 
                                            A 36.457 36.457 0 0 0 102.30078 67.763672 
                                            L 90.9375 119.65625 
                                            A 8 8 0 0 0 97.037109 129.18359 
                                            L 399.50391 195.41992 
                                            A 8.034 8.034 0 0 0 401.22656 195.60547 
                                            A 8 8 0 0 0 409.0332 189.31641 
                                            L 420.40039 137.42188 
                                            A 36.459 36.459 0 0 0 392.58398 94.007812 
                                            L 345.9082 83.787109 
                                            L 348.82227 70.474609 
                                            A 36.458 36.458 0 0 0 321.00781 27.060547 
                                            L 238.71875 9.0390625 
                                            A 36.456 36.456 0 0 0 231.48828 8.1992188 
                                            z 
                                            M 231.83594 24.214844 
                                            A 20.459 20.459 0 0 1 235.30078 24.669922 
                                            L 317.58789 42.689453 
                                            A 20.459 20.459 0 0 1 333.19727 67.050781 
                                            L 330.28125 80.363281 
                                            L 208.01953 53.591797 
                                            L 210.93555 40.277344 
                                            A 20.459 20.459 0 0 1 231.83594 24.214844 
                                            z 
                                            M 138.83008 55.125 
                                            A 20.458 20.458 0 0 1 142.29492 55.578125 
                                            L 389.1582 109.63867 
                                            A 20.459 20.459 0 0 1 404.76953 134 
                                            L 395.11523 178.07812 
                                            L 108.2793 115.26562 
                                            L 117.93164 71.1875 
                                            A 20.458 20.458 0 0 1 138.83008 55.125 
                                            z 
                                            M 107.92383 196 
                                            A 7.785 7.785 0 0 0 100 203.82031 
                                            L 100 455.02148 
                                            C 100 468.45248 104.69034 480.92022 113.27734 489.94922 
                                            A 44.6 44.6 0 0 0 145.86914 504 
                                            L 325.35156 504 
                                            A 44.361 44.361 0 0 0 357.83203 489.94727 
                                            C 366.41803 480.91527 371 468.44853 371 455.01953 
                                            L 371 203.81836 
                                            A 7.6 7.6 0 0 0 363.30078 196 
                                            L 107.92383 196 
                                            z 
                                            M 116 212 
                                            L 355 212 
                                            L 355 455.01953 
                                            C 355 473.71353 342.42256 488 325.35156 488 
                                            L 145.86914 488 
                                            C 128.80014 488 116 473.71353 116 455.01953 
                                            L 116 212 
                                            z 
                                            M 178.76562 239.46094 
                                            A 8 8 0 0 0 171 247.45703 
                                            L 171 436.23633 
                                            A 8 8 0 0 0 179 444.23633 
                                            A 8 8 0 0 0 187 436.23633 
                                            L 187 247.45703 
                                            A 8 8 0 0 0 178.76562 239.46094 
                                            z 
                                            M 235.76562 239.46094 
                                            A 8 8 0 0 0 228 247.45703 
                                            L 228 436.23633 
                                            A 8 8 0 0 0 236 444.23633 
                                            A 8 8 0 0 0 244 436.23633 
                                            L 244 247.45703 A 8 8 0 0 0 235.76562 239.46094 
                                            z 
                                            M 291.76562 239.46094 
                                            A 8 8 0 0 0 284 247.45703 
                                            L 284 436.23633 A 8 8 0 0 0 292 444.23633 
                                            A 8 8 0 0 0 300 436.23633 L 300 247.45703 
                                            A 8 8 0 0 0 291.76562 239.46094 
                                            z" ></path>
                                </svg>
                            </button>
                            <br />
                            <p className="cart__item__price">&euro;{ item.totalPrice.toFixed( 2 ) }</p>
                        </div>
                        { item.extras.map( extra => (
                            <dd className="cart__item__extra" key={ 'cart-item' + item.id + "__extra" + extra.name } >
                                - { extra.name + ( extra.price ? ' + ' + extra.price : '' ) }
                            </dd>
                        )) }
                    </div>
                )) : <dt className="cart__noitem-headline" >The cart is Empty! </dt> }
            </dl>
            { cart.length > 0 && <button className="cart__submit-button" onClick={ makeOrder } >Order Now</button> }
        </section>
    );
}

const mapStateToProps = state => ({ 
    cart: state.cart, 
    isCartVisible: state.isCartVisible 
});

const mapDispatchToProps = dispatch => ({
    updateCart: newCart => dispatch( updateCart( newCart ) ),
    setUserInfoVisibility: isVisble => dispatch( setUserInfoVisibility( isVisble ) ),
    setCartVisibility: isVisble => dispatch( setCartVisibility( isVisble ) ),
    dispatchOrder: () => dispatch( dispatchOrder() )
});

export default connect( mapStateToProps, mapDispatchToProps )( Cart );