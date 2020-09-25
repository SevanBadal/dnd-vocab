import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide, currentWord }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>
        原词: {currentWord.原词}
        <hr/>
        译本译词: {currentWord.译本译词}
        <hr/>
        子类: {currentWord.子类}
        <hr/>
        源书: {currentWord.源书}
        <hr/>
        词类: {currentWord.词类}
        <hr/>
        译注: {currentWord.译注}
        </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;