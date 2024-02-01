function Modal({ isOpen, children, onClose }) {
  if (!isOpen) return null;

  return (
      <div className="modal-backdrop">
          <div className="modal-content">
              <button onClick={onClose} className="close-button">Close</button>
              {children}
          </div>
      </div>
  );
}

export default Modal;