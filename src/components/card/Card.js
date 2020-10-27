import React from 'react';
import './Card.css';

export default ({ children, title, content, onClick }) => (
    <div onClick={onClick} className="card column">
        <div className="card-title">{ title }</div>
        <div className="card-content">
            { content }
        </div>
        <div className="card-footer">
        { children }
        </div>
    </div>
)
