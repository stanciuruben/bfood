import { connect } from 'react-redux';

const UserInfo =  ({ userName }) => {
    if ( userName !== null ) {
        return (
            <div>
                <button>Profile</button>
                <ul>
                    <li>
                        <a href="/profile">{ userName }</a>
                    </li>
                    <li>
                        <a href="/orders">Orders</a>
                    </li>
                    <li>
                        <button>Logout</button>
                    </li>
                </ul>
            </div>
        )
    }
    return (
        <div>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>

    );
        
}

const mapStateToProps = state => ({ userName: state.userName });

export default connect( mapStateToProps, null )( UserInfo );