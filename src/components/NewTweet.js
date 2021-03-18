import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets";

class NewTweet extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    const text = e.target.value;

    this.setState(() => ({
      text,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { text } = this.state;
    const { dispatch } = this.props;
    // Todo: redirect to / home page
    // add state to redux store
    console.log("New Tweet: ", this.props);
    dispatch(handleAddTweet(text));
    this.setState(() => ({
      text: "",
    }));
  };
  render() {
    const { text } = this.state;

    const textLeft = 280 - text.length;

    return (
      <div>
        <h3 className="center">Compose new tweet</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            className="textarea"
            maxLength={280}
            value={text}
            onChange={this.handleChange}
          />
          {textLeft <= 100 && <div className="tweet-length">{textLeft}</div>}
          <button className="chirper-btn" type="submit" disabled={text === ""}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
function mapStateToProps() {
  return {};
}
function mapDispatchToProps() {
  return {};
}
export default connect()(NewTweet);
