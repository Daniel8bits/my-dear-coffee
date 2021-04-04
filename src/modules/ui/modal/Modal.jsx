import React from 'react'
import MaterialModal from '@material-ui/core/Modal'

const Modal = ({open, handleClose, className='', children}) => {

    return (
        <MaterialModal open={open} onClose={handleClose}>
            <div className='UI-modal-wrapper'>
                <div className={'UI-modal ' + className}>
                    {children}
                </div>
            </div>
        </MaterialModal>
    )

}

export default Modal