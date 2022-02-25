import React from 'react';
import './modal.css';
/** Display modal
 * @param  {string} modalmessage
 * @param  {string} color
 * @param  {boolean} modalOpen
 * @param  {function} modalClose
 * @param  {string} buttonContent
 */
export const Modal = ({ modalmessage, color, modalClose, buttonContent }) => {
    return (
        <div className="modal">
            <div onClick={modalClose} className="modalOverlay"></div>
            <div className="modalContent">
                <p>{modalmessage}</p>
                <button onClick={modalClose} style={{ background: `${color}` }} className="modalClose">
                    {buttonContent}
                </button>
                <button onClick={modalClose} style={{ background: `${color}` }} className="button">
                    {buttonContent}
                </button>
            </div>
        </div>
    )
}


