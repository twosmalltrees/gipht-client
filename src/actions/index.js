import $ from 'jquery';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_OUT = 'SIGN_OUT';

export const FETCH_CONVERSATIONS = 'FETCH_CONVERSATIONS';
export const FETCH_CONVERSATION = 'FETCH_CONVERSATION';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const FETCH_MESSAGE = 'FETCH_MESSAGE';

export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const FETCH_FRIEND = 'FETCH_FRIEND';

const ROOT_URL = 'http://localhost:3000';


// Sign in a user based on email and password
export function signIn(email, password) {
  const request = $.auth.emailSignIn({
    email: email,
    password: password
  });
  return {
    type: SIGN_IN,
    payload: request
  };
}

// Sign up a user using email and password
export function signUp(email, password, passwordConfirmation) {
  const request = $.auth.emailSignUp({
    email: email,
    password: password,
    passwordConfirmation: passwordConfirmation
  });
  return {
    type: SIGN_UP,
    payload: request
  };
}

// Sign out current user
export function signOut() {
  const request = $.auth.signOut();
  return {
    type: SIGN_OUT,
    payload: request
  };
}

// Fetch all of current users conversations
export function fetchConversations() {
  const request = $.get(`${ROOT_URL}/conversations`);
  return {
    type: FETCH_CONVERSATIONS,
    payload: request
  };
}

// Fetch specific conversation
export function fetchConversation(conversationId) {
  const request = $.get(`${ROOT_URL}/conversations/${conversationId}`);
  return {
    type: FETCH_CONVERSATION,
    payload: request
  };
}

// Fetch all messages from particular conversation
export function fetchMessages(conversationId) {
  const request = $.get(`${ROOT_URL}/conversations/${conversationId}/messages`);
  return {
    type: FETCH_MESSAGES,
    payload: request
  };
}

// Fetch single messages from particular conversation
export function fetchMessage(conversationId, messageId) {
  const request = $.get(`${ROOT_URL}/conversations/${conversationId}/messages/${messageId}`);
  return {
    type: FETCH_MESSAGE,
    payload: request
  };
}

// Fetch all the current users friends
export function fetchFriends() {
  const request = $.get(`${ROOT_URL}/friendships`);
  return {
    type: FETCH_FRIENDS,
    payload: request
  };
}

// Fetch a particular friend of the current user
export function fetchFriend(friendId) {
  const request = $.get(`${ROOT_URL}/friendships/${friendID}`);
  return {
    type: FETCH_FRIEND,
    payload: request
  };
}
