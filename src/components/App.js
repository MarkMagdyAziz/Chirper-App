import React, { Component } from "react";

import Dashboard from "./Dashboard";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
import ChirperNav from "./ChirperNav";
import NotFound from "./NotFound";

import { connect } from "react-redux";
import { handleInitialData } from "./../actions/shared";

import LoadingBar from "react-redux-loading-bar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  // when component mounts
  componentDidMount() {
    // dispatch handleInitialData function
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { loading } = this.props;
    return (
      <React.Fragment>
        <ToastContainer />
        <LoadingBar />

        {loading && (
          <React.Fragment>
            <ChirperNav />
            <div className="container">
              <div>
                <Switch>
                  <Route path="/" exact component={Dashboard} />
                  <Route path="/tweet/:id" component={TweetPage} />
                  <Route path="/new" component={NewTweet} />
                  <Route path="/notfound" component={NotFound} />
                  <Redirect to="/" />
                  <Redirect to="notfound" />
                </Switch>
              </div>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser !== null,
  };
}

export default connect(mapStateToProps)(App);
