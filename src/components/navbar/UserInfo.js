import { connect } from 'react-redux';

function UserInfo( props ) {
    if ( props.userName !== null ) {
        return (
            <div>
                <button>Profile</button>
                <ul>
                    <li>
                        <a href="/profile">{ props.userName }</a>
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
    return <a href="/register">Register</a>;
}

function mapStateToProps( state ) {
    return { userName: state.userName };
}

export default connect( mapStateToProps, null )( UserInfo );