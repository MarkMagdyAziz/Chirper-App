import { saveLikeToggle, saveTweet } from "../utils/api";
import { toast } from "react-toastify";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const ADD_TWEET = "ADD_TWEET";

// Receive Tweets action
export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
}

// ToggleTweet Action
export function toggleTweet({ id, authedUser, hasLiked }) {
  return {
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked,
  };
}

// add New Tweet action
export function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet,
  };
}
// Toggle Tweet Action Creator => Handle to database
export function handleToggleTweet(info) {
  // Optimistic Updating
  // Updating the UI before the action gets recorded on the backend
  return (dispatch) => {
    dispatch(toggleTweet(info));
    return saveLikeToggle(info).catch((e) => {
      toast.warn("Error in handleToggleTweet:", e);
      dispatch(toggleTweet(info));
      toast.error("The was an error liking the tweet. Try again.");
    });
  };
}

// add Tweet Action Create
export function handleAddTweet(text, replyingTo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveTweet({
      text,
      author: authedUser,
      replyingTo,
    })
      .then((tweet) => dispatch(addTweet(tweet)))
      .then(() => dispatch(hideLoading()));
  };
}
