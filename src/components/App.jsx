import  {Searchbar} from 'components/Searchbar/Searchbar';
import { useState, useEffect  } from 'react';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import {imagesArr }  from './Api/API';
import { Button } from 'components/Button/Button';
import { Loader } from './Loader/Loader';
import style from 'components/Styles.module.css';

export const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false)
  

  useEffect(() => {
    if (!search) {
      return;
    }
    setIsLoading(true);
    imagesArr(search, page).then(response => {
      if (!response.hits.length) {
        alert(`This request ${search} is not found`);
        return;
      }

      setImages(prevState =>[...prevState, ...response.hits]);
      setShowBtn(page < Math.ceil(response.totalHits / 12));
      setIsLoading(false);
    });
  }, [search, page]);

  const handleSearch = text => {
    setSearch(text);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prePage => prePage + 1);
  };
return (
      <>
      <div className={style.App}>
        <Searchbar onSubmit={handleSearch} />
        {isLoading && <Loader />}
        {images && <ImageGallery images={images} />}
        {showBtn && <Button onLoadMore={handleLoadMore} />}
        </div>
      </>
    );
  
}
