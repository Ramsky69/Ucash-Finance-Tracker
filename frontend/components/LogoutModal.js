import React, { useState } from 'react';

const LogoutModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    // Add your logout logic here
    alert('You have been logged out.');
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Logout</button>

      {showModal && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <p>Log out from Status?</p>
            <button style={styles.confirmButton} onClick={handleLogout}>
              Yes, log out
            </button>
            <button style={styles.cancelButton} onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  confirmButton: {
    backgroundColor: '#7A4FFF',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  cancelButton: {
    backgroundColor: 'transparent',
    color: '#7A4FFF',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default LogoutModal;