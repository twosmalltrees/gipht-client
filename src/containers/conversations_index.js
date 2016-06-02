import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchConversations } from '../actions/index';

class ConversationsIndex extends Component {
  componentWillMount() {
    this.props.fetchConversations();
  }

  renderConversations() {
    return this.props.conversations.map((conversation) => {
      return (
        <li key={conversation.id}>
          <span>{conversation.conversation_name}</span>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Conversations</h3>
        <ul>
          {this.renderConversations()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { conversations: state.conversations.all };
}

export default connect(mapStateToProps, { fetchConversations })(ConversationsIndex);
