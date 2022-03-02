import React from 'react';
import './modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

/** Display modal
 * @param  {string} modalmessage
 * @param  {string} color
 * @param  {boolean} modalOpen
 * @param  {function} modalClose
 * @param  {string} buttonContent
 */
export const Modal = ({ modalmessage, toggleModal, backgroundColor}) => {
    return (
        <div className="modal" style={{ backgroundColor: {backgroundColor}}}>
            <div onClick={toggleModal} className="modalOverlay"></div>
            <div className="modalContent" >
                <p>{modalmessage}</p>
                <div onClick={toggleModal}  className="modalClose">
                <FontAwesomeIcon icon={faCircleXmark} size="xl" />
                </div>
            </div>
        </div>
    )
}


