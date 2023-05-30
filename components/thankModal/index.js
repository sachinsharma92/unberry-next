import { Modal } from 'antd';
import React from 'react';
import ImageCustom from '../../common/ImageCustom';


export default function ThankModal(props) {
  return (
    <Modal centered visible={props.visible} footer={false} onCancel={props.onCancel} wrapClassName="thanls-modal-style" maskStyle={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
      <div className='modal-body-style'>
        <button className='close-btn' onClick={props.onCancel}><ImageCustom src="close-button.svg" alt="close-icon" width="38" height="38" /></button>
        <div className='animation-frame'>
          <ImageCustom src="confetti.svg" className="ani-img" alt="animation-icon" width="122" height="122" />
        </div>
        <div className='content'>
          <h3 className='title3'>Thank you for your request.</h3>
          <p className='description'>We will reach out to you soon to schedule a demo call</p>
        </div>
      </div>
    </Modal>
  )
}
