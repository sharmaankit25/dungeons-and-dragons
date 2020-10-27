import React from 'react';
import './Card.css';

export default ({ children, text, onClick }) => (
    <div onClick={onClick} className="card column">
        <div className="card-content">
        { text }
        </div>
        <div className="card-footer">
        { children }
        </div>
    </div>
)
