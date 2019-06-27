import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  return (
    <header>
      <nav className="navbar">

        <div className="navbar-left">
          <div className="navbar-item">
            <a href="#" className="navbar-title">React with AzureAD Auth</a>
          </div>
        </div>

        <div className="navbar-right">
          <ActionLinks {...props} />
        </div>

      </nav>
    </header>
  );
};

const ActionLinks = ({ isAuth, user, signIn, signOut }) => {
  if (isAuth && user) {
    return (
      <div className="navbar-item">
        <span>{user.name}</span>
        <span>&nbsp; | &nbsp;</span>
        <a href="#" className="navbar-link" onClick={signOut}>Sign Out</a>
      </div>
    );

  } else {
    return (
      <div className="navbar-item">
        <a href="#" className="navbar-link" onClick={signIn}>Sign In</a>
      </div>
    );
  }
};

Navbar.propTypes = {
  isAuth: PropTypes.bool,
  user: PropTypes.object,
  signIn: PropTypes.func,
  signOut: PropTypes.func
};

export default Navbar;
