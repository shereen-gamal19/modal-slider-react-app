import React ,{useContext} from 'react'
import { FaTimes } from 'react-icons/fa'
import { AppContext } from './context'

const Modal = () => {
  // we can make a state value so that to toggle the modal so we can do that as we did before by making state value false and then if it is true then we can toggle throw the classes 
  // but we can't do that because we can't open the modal from the modal because the button in the home component
  const {isModalOpen , closeModal} = useContext (AppContext)

  return (
    <div className={`${isModalOpen ? 'modal-overlay show-modal':'modal-overlay'} `}>
      <div className='modal-container'>
        <h3>modal content</h3>
        {/* make a button to close the modal */}
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes/>
        </button>
      </div>

    </div>
  )
}

export default Modal
