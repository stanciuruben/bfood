import Navbar from './Navbar';
import Sidemenu from './Sidemenu';
import Orders from './Orders';
import { connect } from 'react-redux';
import { setUser } from '../redux/actions';
import { useEffect } from 'react';

const App = ( { loading, setUser } ) => {
  const fetchUserInfo = async () => {
    const response = await fetch( '/user' );
    const result = await response.json();
    if ( result.user ) {
      setUser( result.user );
    } else {
      setUser( null );
    }
  }

  useEffect( () => {
    fetchUserInfo();
    // eslint-disable-next-line
  }, [ loading ] );

  return (
    <main className={ 'App' + ( loading === true ? ' loading' : '' ) }>
      <Sidemenu />
      <Navbar />
      <Orders />
    </main>
  );
}

const mapStateToProps = state => ({ loading: state.loading });

const mapDispatchToProps = dispatch => ({ 
  setUser: user => dispatch( setUser( user ) )
});

export default connect( mapStateToProps, mapDispatchToProps )( App );
