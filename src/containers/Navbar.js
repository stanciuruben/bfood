import { connect } from 'react-redux';
import SearchBar from '../components/navbar/SearchBar';
import { toggleCart, toggleUserInfo } from '../redux/actions';

const Navbar = ({ isCartVisible, isUserInfoVisible, toggleCart, toggleUserInfo }) => {
    const handleCartClick = () => {
        toggleCart();
    }

    const handleUserInfoClick = () => {
        toggleUserInfo();
    }

    return (
        <nav id='main-nav'>
            <a href='/' className='main-nav-logo'>BFOOD</a>
            <div className='container'>
                <SearchBar />
                <button onClick={ handleCartClick } className="main-nav-button" title="Cart" ><svg preserveAspectRatio="xMaxYMin meet" viewBox="0 0 512 512" fill="#D2E0DD"><path d="M199.039 373.884A46.058 46.058 0 10245.1 419.941 46.111 46.111 0 00199.039 373.884zM380.316 373.884a46.058 46.058 0 1046.059 46.057A46.111 46.111 0 00380.316 373.884zM455.132 127.679H141.567l-6.8-40.047A49.869 49.869 0 0085.475 46H56.868a10 10 0 100 20H85.474A29.92 29.92 0 01115.05 90.979l36.21 213.315a49.871 49.871 0 0049.3 41.632H413.729a10 10 0 000-20H200.556a29.92 29.92 0 01-29.576-24.979L167.34 279.5H376.362a59.816 59.816 0 0057.131-41.666l31.161-97.1a10 10 0 00-9.522-13.055z"></path></svg></button>
                <button onClick={ handleUserInfoClick } className="main-nav-button" title="User Info" ><svg preserveAspectRatio="xMaxYMin meet" fill="#D2E0DD" viewBox="0 0 30 30"><path d="M 15 3 C 11.686 3 9 5.686 9 9 L 9 10 C 9 13.314 11.686 16 15 16 C 18.314 16 21 13.314 21 10 L 21 9 C 21 5.686 18.314 3 15 3 z M 14.998047 19 C 10.992047 19 5.8520469 21.166844 4.3730469 23.089844 C 3.4590469 24.278844 4.329125 26 5.828125 26 L 24.169922 26 C 25.668922 26 26.539 24.278844 25.625 23.089844 C 24.146 21.167844 19.004047 19 14.998047 19 z"></path></svg></button>
            </div>
        </nav>
    );
};

const mapStateToProps = state => {
    return { 
        isCartVisible: state.isCartVisible, 
        isUserInfoVisible: state.isUserInfoVisible 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCart: () => dispatch( toggleCart() ),
        toggleUserInfo: () => dispatch( toggleUserInfo() )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( Navbar );