import React from 'react';
import { UserAgentApplication } from 'msal';

import Navbar from './NavBar';
import Config from '../../config';

class App extends React.Component {
  constructor(props) {
    super(props);

    // initialise User Agent
    this.userAgentApplication = new UserAgentApplication({
      auth: {
        clientId: Config.APP_ID,
        authority: Config.AUTH_URL,
        redirectUri: Config.REDIRECT_URL,
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: true
      }
    });

    let user = this.userAgentApplication.getAccount();

    this.state = {
      isAuthenticated: (user !== null),
      isError: false,
      user: null,
      message: ''
    };

    if (user) {
      this.getUserProfile();
    }
  }

  render() {
    return (
      <div>
        <Navbar
          isAuth={this.state.isAuthenticated}
          user={this.state.user}
          signIn={this.signIn}
          signOut={this.signOut}
        />

        <main>
          {this.state.isError &&
            <div className="error">
              <p>{this.state.message}</p>
            </div>
          }
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse at interdum risus. Nulla dictum feugiat erat nec pretium.
              Suspendisse et turpis lectus. Mauris metus risus, vehicula eget
              magna eu, facilisis sagittis felis. Integer nulla justo, vulputate
              sit amet augue vitae, consectetur mollis lacus. Donec mollis
              ut dui id interdum. Donec sit amet justo ex.
            </p>
          </div>
        </main>
      </div>
    );
  }

  // Retrieve the authenticated user
  getUserProfile = async () => {
    try {

      let accessToken = await this.userAgentApplication.acquireTokenSilent({
        scopes: Config.API_SCOPES
      });

      let user = this.userAgentApplication.getAccount();

      if (accessToken) {
        this.setState({
          isAuthenticated: true,
          user
        });
      } else {
        this.setState({
          isAuthenticated: false,
          isError: true,
          message: 'ERROR: Error retrieving user access token.',
          user: null
        });
      }

    } catch (error) {
      this.setState({
        isAuthenticated: false,
        isError: true,
        message: JSON.stringify(error),
        user: null
      });
    }
  }

  signIn = async () => {
    try {
      await this.userAgentApplication.loginPopup(
        {
          scopes: Config.API_SCOPES,
          prompt: "select_account"
      });

      await this.getUserProfile();

    } catch (error) {
      this.setState({
        isAuthenticated: false,
        isError: true,
        message: JSON.stringify(error),
        user: null
      });
    }
  }

  signOut = () => {
    this.userAgentApplication.logout();
  }
};

export default App;
