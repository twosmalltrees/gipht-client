import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="conversations" activeClassName="active">
          Conversations
        </Link>
        <Link to="friends" activeClassName="active">
          Friends
        </Link>
        <Link to="giphts" activeClassName="active">
          Giphts
        </Link>
        <Link to="profile" activeClassName="active">
          Profile
        </Link>
      </div>
    );
  }
}
