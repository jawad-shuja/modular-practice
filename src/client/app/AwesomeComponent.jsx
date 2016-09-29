import React from 'react';

var AwesomeComponent = React.createClass({

  getInitialState() {
    return {
      likesCount: 10
    };
  },

  like: function() {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({
      likesCount: newLikesCount
    });
  },

  render: function() {
    return (
      <div class="like-section">
        Likes : <span>{this.state.likesCount}</span>
        <div><button onClick={this.like}>Like Me</button></div>
      </div>
    );
  }

});

export default AwesomeComponent;
