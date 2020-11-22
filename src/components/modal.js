import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import noScroll from "no-scroll"

const StyledFocusTrap = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  justify-content: safe center;
  overflow: auto;
`

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
`

const portalRoot =
  typeof document !== `undefined` ? document.getElementById("portal") : null

const Modal = ({ onClose, children }) => {
  const [portalRef, setPortalRef] = useState()
  useEffect(() => {
    noScroll.on()
    const portal =
      typeof document !== `undefined` ? document.createElement("div") : null
    setPortalRef(portal)
    portalRoot.appendChild(portal)
    return () => {
      portalRoot.removeChild(portal)
      noScroll.off()
    }
  }, [])

  if (!portalRef) return null

  return ReactDOM.createPortal(
    <StyledFocusTrap role="dialog" tabIndex="-1" aria-modal="true">
      <>
        <Button tabIndex="-1" onClick={onClose} type="button" />
        {children}
      </>
    </StyledFocusTrap>,
    portalRef
  )
}

export default Modal
