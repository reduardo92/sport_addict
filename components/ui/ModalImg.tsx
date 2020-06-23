import React, { useContext } from 'react';
import SportContext from '../context/SportsData/SportContext';
import { CLEAR_MODAL_IMG } from '../context/types';

const ModalImg: React.FC = () => {
  const { modalImg, clearData } = useContext(SportContext);

  return (
    <div
      style={{ padding: '0 1em' }}
      className={`modal ${modalImg.isActive && 'is-active'}`}
    >
      <div
        className='modal-background'
        onClick={() => clearData!(CLEAR_MODAL_IMG)}
      ></div>
      <div className='modal-content'>
        <p className='image is-4by3'>
          <img
            style={{ objectFit: 'contain' }}
            src={modalImg.src}
            alt='fan art'
          />
        </p>
      </div>
      <button
        onClick={() => clearData!(CLEAR_MODAL_IMG)}
        className='modal-close is-large'
        aria-label='close'
      ></button>
    </div>
  );
};

export default ModalImg;
