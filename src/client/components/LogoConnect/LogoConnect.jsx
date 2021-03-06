import React from 'react';
import PropTypes from 'prop-types';
// Import react components
import LoggingFace from '../LoggingFace/LoggingFace';
import LogoFace from '../LogoFace/LogoFace';
// Import style
import './LogoConnect.scss';

const LogoConnect = ({
  user, maestro
}) => (
  (user.login !== '')
    ? <div className="container3D"><div className="card3D"><LogoFace user={user} maestro={maestro} /></div></div>
    : <div className="container3D"><div className="card3D"><LoggingFace maestro={maestro} /></div></div>
);

LogoConnect.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string,
    login: PropTypes.string,
    password: PropTypes.string,
    role: PropTypes.oneOf(['admin', 'user']),
    email: PropTypes.string
  }),
  maestro: PropTypes.object
};

LogoConnect.defaultProps = { // define the default props
  user: {
    _id: '', login: '', password: '', role: 'user', email: ''
  },
  maestro: { dataRefresh: () => {} }
};

export default LogoConnect;
