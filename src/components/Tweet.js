import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet, formatDate } from "../utils/helpers";
import {
  TiArrowBackOutline,
  TiHeartOutline,
  TiHeartFullOutline,
} from "react-icons/ti/index";
import { handleToggleTweet } from "./../actions/tweets";

class Tweet extends Component {
  toParent = (e, id) => {
    e.preventDefault();
    // todo : Redirect to parent twweet
  };
  handleLike = () => {
    const { handleLikeToggle, authedUser, tweet } = this.props;
    //    e.preventDefault();
    console.log("ths.props", this.props);
    handleLikeToggle({
      id: tweet.id,
      authedUser,
      hasLiked: tweet.hasLiked,
    });
  };
  render() {
    const { tweet } = this.props;
    const {
      name,
      avatar,
      timestamp,
      text,
      hasLiked,
      likes,
      replies,
      parent,
    } = tweet;

    if (tweet === null) {
      return <p>This Tweet doesn't existd</p>;
    }
    return (
      <div className="tweet">
        <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
        <div className="tweet-info">
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            {parent && (
              <button
                className="replying-to"
                onClick={(e) => this.toParent(e, parent.id)}
              >
                Replying to @{parent.author}
              </button>
            )}
            <p>{text}</p>
          </div>
          <div className="tweet-icons">
            <TiArrowBackOutline className="tweet-icon" />
            <span>{replies !== 0 && replies}</span>
            <button className="heart-button" onClick={this.handleLike}>
              {hasLiked === true ? (
                <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
              ) : (
                <TiHeartOutline className="tweet-icon" />
              )}
            </button>
            <span> {likes !== 0 && likes}</span>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ authedUser, tweets, users }, { ...props }) {
  const { id } = props;
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

  return {
    authedUser,
    id,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    handleLikeToggle: (id, authedUser, hasLiked) =>
      dispatch(handleToggleTweet(id, authedUser, hasLiked)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Tweet);
