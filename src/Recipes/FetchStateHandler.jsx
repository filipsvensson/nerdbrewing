import React from 'react';
import PropTypes from 'prop-types';
import { STATE } from '../hooks/usePromise';

const FetchStateHandler = ({ state, children }) => {
  if (state === STATE.LOADING) {
    return <div>Loading</div>;
  }

  if (state === STATE.ERROR) {
    return <div>Error</div>;
  }

  return children;
};

FetchStateHandler.propTypes = {
  state: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default FetchStateHandler;
