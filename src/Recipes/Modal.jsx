import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import FocusTrap from 'focus-trap-react';
import styled from 'styled-components';
import noScroll from 'no-scroll';
/* eslint-disable */
const StyledFocusTrap = styled(FocusTrap)`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  justify-content: safe center;
  overflow: auto;
`;

const Button = styled.button`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: 0.9;
  will-change: opacity;
  cursor: auto;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
`;

class Modal extends Component {
  static CloseTrigger = {
    ESC: 'ESC',
    BACKDROP: 'BACKDROP',
    MANUAL: 'MANUAL'
  };

  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  state = {
    active: this.props.disableInitialFocus,
    disableEscape: this.props.disableEscapeClose
  };

  componentDidMount() {
    global.window.addEventListener('keyup', this.onKeyUp, false);

    // Turn off the document's scrolling
    noScroll.on();
  }

  componentWillUnmount() {
    global.window.removeEventListener('keyup', this.onKeyUp, false);
    // Restore document scrolling
    noScroll.off();
  }

  onKeyUp = event => {
    if (this.state.disableEscape || !this.props.onClose) {
      return;
    }

    const key = event.key || event.keyCode;

    if (key === 'Escape' || key === 'Esc' || key === 27) {
      event.preventDefault();
      this.props.onClose(Modal.CloseTrigger.ESC);
    }
  };

  onBackgroundClicked = () => {
    if (this.props.disableBackdropClick || !this.props.onClose) {
      return;
    }

    this.props.onClose(Modal.CloseTrigger.BACKDROP);
  };

  setFocus = () => {
    this.setState({
      active: false
    });
  };

  disableEscapeClose = () => {
    this.setState({
      disableEscape: true
    });
  };

  enableEscapeClose = () => {
    this.setState({
      disableEscape: false
    });
  };

  render() {
    const {
      children,
      onClose,
      disableEscapeClose,
      disableBackdropClick,
      disableInitialFocus,
      disableReturnFocus,
      initialFocus,
      fallbackFocus,
      ...props
    } = this.props;

    const callbackProps = {
      setFocus: this.setFocus,
      disableEscapeClose: this.disableEscapeClose,
      enableEscapeClose: this.enableEscapeClose
    };

    const trapOptions = {
      initialFocus,
      fallbackFocus,
      returnFocusOnDeactivate: !disableReturnFocus
    };

    return ReactDOM.createPortal(
      <StyledFocusTrap
        active={!this.state.active}
        role="dialog"
        tabIndex="-1"
        focusTrapOptions={trapOptions}
        {...props}
        aria-modal="true"
      >
        <Button
          tabIndex="-1"
          onClick={this.onBackgroundClicked}
          onKeyUp={this.onKeyUp}
          type="button"
        />
        {typeof children === 'function'
          ? children(onClose.bind(onClose, Modal.CloseTrigger.MANUAL), callbackProps)
          : children}
      </StyledFocusTrap>,
      document.body
    );
  }
}

Modal.defaultProps = {
  disableEscapeClose: false,
  disableBackdropClick: false,
  disableInitialFocus: false,
  onClose: null,
  initialFocus: undefined,
  disableReturnFocus: false,
  fallbackFocus: ''
};

Modal.propTypes = {
  disableEscapeClose: PropTypes.bool,
  disableBackdropClick: PropTypes.bool,
  disableInitialFocus: PropTypes.bool,
  disableReturnFocus: PropTypes.bool,
  initialFocus: PropTypes.string,
  fallbackFocus: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.node.isRequired]).isRequired
};

export default Modal;
