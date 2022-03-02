import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

/** Display modal
 * @param  {string} modalMessage
 * @param  {string} color
 * @param  {boolean} modalOpen
 * @param  {function} modalClose
 * @param  {string} buttonContent
 */

const Modal = ({ isShowing, modalMessage, style, toggle }) => {

    const defaultStyles = {
        modal: {
            width: '100vw',
            height: '100vh',
            top: '0',
            left: '0',
            bottom: '0',
            right: '0',
            position: 'fixed',
        },
       overlay: {
            width: '100vw',
            height: '100vh',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            position: 'fixed',
            background: '#94d1ec',
            opacity: '0.33',
        },
        content: {
            position:'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            lineHeight: '1.4',
            padding: '14px 28px',
            borderRadius: '3px',
            background: '#fff',
            maxWidth: '600px',
            minWidth: '300px'
        },
        close: {
            position: 'absolute',
            top: '-8px',
            right: '-8px',
        }
    }
    return (
        <div>
            {isShowing && <div className="modal" style={style && style.modal ? style.modal : defaultStyles.modal}>
                <div onClick={toggle} className="modalOverlay" style={style && style.overlay ? style.overlay : defaultStyles.overlay}></div>
                <div className="modalContent" style={style && style.content ? style.content : defaultStyles.content}>
                    <p>{modalMessage}</p>
                    <div onClick={toggle} className="modalClose" style={style && style.close ? style.close : defaultStyles.close} >
                        <FontAwesomeIcon icon={faCircleXmark} size="xl" />
                    </div>
                </div>
            </div>}
        </div>

    )
}

export { Modal };


