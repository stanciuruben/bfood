const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = ( req, res, next ) => {
    const token = req.cookies[ 'bfood-auth-token' ];

    if( !token ) {
        return res.status( 401 ).redirect( '/bfood/login' );
    }

    try {
        const decoded = jwt.verify( token, config.get( 'jwtSecret' ) );
        res.locals.userID = decoded.user.id;
        if ( decoded ) {
            next();
        }
    } catch ( err ) {
        res.status( 401 ).json( { message: 'Server error: token is not valid' } );
    }
}