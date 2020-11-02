import React from 'react';
import ReactDom from 'react-dom';

const CARD_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '50px',
    zIndex: 1000
};


const UserCard = ({open, children, onClose }) => {
    if(!open) return null;
    return ReactDom.createPortal(
        <div style={CARD_STYLES} class="card">
            {children}
            <button onClick={onClose}>Close</button>
        </div>,
        document.getElementById('portal')
    )
};

export default UserCard;

