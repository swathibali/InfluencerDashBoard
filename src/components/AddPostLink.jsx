
import React, { useState } from 'react'
import Modal from 'react-modal'
import './addPostLink.scss'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { useHistory } from 'react-router';


const AddPostLink = ({isModalOpen,addPostLink}) => {
     
      
    
    return (
        <>
         
      <Modal
        isOpen={isModalOpen} 
        onRequestClose={addPostLink}
        shouldCloseOnOverlayClick={false}
        className='mymodal'
        overlayClassName="myoverlay"
       >
           <div className="modal__header">
           <h2>Add Post</h2>
        <span onClick={addPostLink}> <CloseOutlinedIcon /></span></div>
       
        <hr />
        <p>Paste your Instagram post URL to add it to the Campaign</p>
        <form>
            <div>
            <label>URL : </label>
            <input type="text" placeHolder ="http://www.instagram.com/qyhgd7236"/>
            </div>
           <div className="butns">
           <button onClick={addPostLink} className='close'>close</button>
            <button type="submit" onClick={addPostLink} >Submit</button>
           </div>
            
        </form>

        
      </Modal>
 
        </>
    )
}

export default AddPostLink
