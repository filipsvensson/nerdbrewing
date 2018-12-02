import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { request } from 'graphql-request';

const LoadState = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
};

class Fetch extends Component {
  state = {
    current: LoadState.LOADING,
    data: null
  };

  async componentDidMount() {
    const { query } = this.props;
    let data;
    try {
      data = await request(
        'https://api-euwest.graphcms.com/v1/cjng53plb31lh01ghmnae5ejg/master',
        query
      );

      this.setState({ current: LoadState.SUCCESS, data });
    } catch (error) {
      this.setState({ current: LoadState.ERROR });
    }
  }

  render() {
    const { current, data } = this.state;
    const { children } = this.props;

    if (current === LoadState.LOADING) {
      return <div>loding</div>;
    }

    if (current === LoadState.ERROR) {
      return <div>error</div>;
    }

    return children(data);
  }
}

Fetch.propTypes = {
  query: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired
};

export default Fetch;
