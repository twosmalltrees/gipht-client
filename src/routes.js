import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

import ConversationsIndex from './containers/conversations_index';
import ConversationsNew from './containers/conversations_new';
import ConversationsShow from './containers/conversations_show';

import FriendshipsIndex from './containers/friendships_index';
import GiphtsIndex from './containers/giphts_index';
import UserProfile from './containers/user_profile';

import SignUp from './containers/sign_up';
import SignIn from './containers/sign_in';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={ConversationsIndex} />
    <Route path="sign_up" component={SignUp} />
    <Route path="sign_in" component={SignIn} />
    <Route path="conversations" component={ConversationsIndex} />
    <Route path="conversations/:conversationId/messages" component={ConversationShow} />
  </Route>
);
