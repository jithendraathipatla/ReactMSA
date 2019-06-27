import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  return (
    <header>
      <nav>

        <div>
          <a href="#">React with AzureAD Auth</a>
        </div>

        <div>
          <ActionLinks {...props} />
        </div>

      </nav>
    </header>
  );
};

const ActionLinks = ({ isAuth, user, signIn, signOut }) => {
  if (isAuth && user) {
    return (
      <div>
        <span>{user.name}</span>
        <span>&nbsp; | &nbsp;</span>
        <a href="#" onClick={signOut}>Sign Out</a>
      </div>
    );

  } else {
    return (
      <div>
        <a href="#" onClick={signIn}>Sign In</a>
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
