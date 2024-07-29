/**
 * Copyright (c) Tiago Mendonça
 */

import './css/Modal.css';

/**
 * Renders a modal component with a close button and custom content.

 * @param {React.ReactNode} children - The content to be rendered within the modal.
 * @param {function} onClose - The function to be called when the close button is clicked.
 * @returns {JSX.Element} The Modal component.
 */
const Modal = ({ children, onClose }) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <button className='close-modal' onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal;