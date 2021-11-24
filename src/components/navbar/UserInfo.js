import { connect } from 'react-redux';

function UserInfo( props ) {
    if ( props.userName !== null ) {
        return (
            <div>
                <button>Profile</button>
                <ul>
                    <li>
                        { props.userName }
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
    return null;
}

function mapStateToProps( state ) {
    const { userName } = state;
    return { userName };
}

export default connect( mapStateToProps, null )( UserInfo );