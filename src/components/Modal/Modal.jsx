import style from 'components/Styles.module.css';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

export const Modal = ({closeModal, tags, modalImg}) => {


  const handleBackdropClick = e => {
  
    if(e.currentTarget === e.target) closeModal()
  }
  
  useEffect(() => {
  const handleKeyDown = e => {
    if (e.key === 'Escape') closeModal()
  }
    window.addEventListener('keydown', handleKeyDown)
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [closeModal])

    return createPortal(
      <div
      className={style.Overlay}
      onClick={handleBackdropClick}
    >
      <div className={style.Modal}>
        <img
          src={modalImg}
          alt={tags}
          width="600"
          height="800"
        />
      </div>
    </div>,
      modalRoot
    );
  }








