const jwt = require( 'jsonwebtoken' );

module.exports = ( token ) => {
    const jwtData = jwt.decode( token );

    if ( Date.now() >= jwtData.exp * 1000 ) { return true; }
    return false;
}