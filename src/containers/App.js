import Navbar from './Navbar';
import Sidemenu from './Sidemenu';
import { connect } from 'react-redux';

function App( loading ) {
  return (
    <main className={ 'App' + ( loading === true ? ' loading' : '' ) }>
      <Sidemenu />
      <Navbar />
    </main>
  );
}

const mapStateToProps = state => ({ loading: state.loading });

export default connect( mapStateToProps, null )( App );
