import { connect } from 'react-redux';

const UserInfo = ({ isUserInfoVisible, user }) => (
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
                <label className='user-info__login__label' for='log-in-email' >Email</label>
                <input className='user-info__login__input' name='log-in-email' type='email' placeholder='example@emailprovider.any' required />
                <label className='user-info__login__label' for='log-in-password' >Password</label>
                <input className='user-info__login__input' name='log-in-password' type='password' placeholder='password' required />
                <button className='user-info__login__submit'>Log-In</button>
                <a href='/register' className='user-info__login__link' ><span>No Account?</span> Register Now!</a>
            </form>
        }
    </section>
);

const mapStateToProps = state => ({ 
    isUserInfoVisible: state.isUserInfoVisible,
    user: state.user
});

export default connect( mapStateToProps, null )( UserInfo );