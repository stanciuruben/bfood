import { connect } from 'react-redux';
import { useState } from 'react';
import { setLoading } from '../redux/actions';


const UserInfo = ({ isUserInfoVisible, user, setLoading }) => {
    const [ errors, setErrors ] = useState( [] );

    const login = async ( event ) => {
        event.preventDefault();
        setLoading( true );
        const email = document.getElementById( 'log-in-email' ).value;
        const password = document.getElementById( 'log-in-password' ).value;

        const response = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify( { email: email, password: password } )
          });
        const result = await response.json();
        if ( 'errors' in result ) {
            setErrors( result.errors );
            setLoading( false );
            return;
        }
        const token = result.token;
        document.cookie = `bfood-auth-token=${ token }; SameSite=None; Secure`;
        setLoading( false );
    }

    return (
        <section id='user-info' className={ 'user-info' + ( isUserInfoVisible ? '' : ' collapse-user-info') }>
            { user ? 
                <div className='user-info__details' >
                    <h1 className='user-info__details__heading' >
                        Hello { user.name }!
                    </h1>
                    <a href='account' className='user-info__details__link' >My account</a>
                    <a href='orders' className='user-info__details__link' >Orders</a>
                    <a href='vouchers' className='user-info__details__link' >Vouchers</a>
                    <a href='help' className='user-info__details__link' >Help Center</a>
                    <button className='user-info__details__logout' >Log-Out</button>
                </div> :
                <form className='user-info__login' >
                    { errors.length > 0 && errors.map( ( error, index ) => <p className='user-info__login__error' key={ 'login-error' + index } >{error}</p> ) }
                    <label className='user-info__login__label' htmlFor='log-in-email' >Email</label>
                    <input id='log-in-email' className='user-info__login__input' name='log-in-email' type='email' placeholder='example@emailprovider.any' required />
                    <label className='user-info__login__label' htmlFor='log-in-password' >Password</label>
                    <input id='log-in-password' className='user-info__login__input' name='log-in-password' type='password' placeholder='password' required />
                    <button className='user-info__login__submit' onClick={ login } >Log-In</button>
                    <a href='/register' className='user-info__login__link' ><span>No Account?</span> Register Now!</a>
                </form>
            }
        </section>
    );
}

const mapStateToProps = state => ({ 
    isUserInfoVisible: state.isUserInfoVisible,
    user: state.user
});

const mapDispatchToProps = dispatch => ({ 
    setLoading: isLoading => dispatch( setLoading( isLoading ) )
 });

export default connect( mapStateToProps, mapDispatchToProps )( UserInfo );