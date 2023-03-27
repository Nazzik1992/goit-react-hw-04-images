import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import style from 'components/Styles.module.css';


export const ImageGalleryItem = ({webformatURL, tags, largeImageURL}) => {
  
  const [ isModalOpen, setIsModalOpen ] = useState(false) 

  const  toggleModal = () => {
    setIsModalOpen(prevState => !prevState.isModalOpen);
  };



    return (
      <li className={style.ImageGalleryItem}>
        <img 
        className={style.ImageGalleryItemImage}
          src={webformatURL}
          alt={tags}
          width="430"
          height="210"
          loading="lazy"
          onClick={toggleModal}
        />

        {isModalOpen && (
          <Modal
            modalImg={largeImageURL}
            tags={tags}
            closeModal={toggleModal}
          />
        )}
      </li>
    );
  }




