import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.reviews.map(review => <Review deleteReview={this.props.deleteReview} review={review} />)}
      </ul>
    );
  }
};

export default Reviews;