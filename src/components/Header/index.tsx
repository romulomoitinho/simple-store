import Styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Header() {
  const navigate = useNavigate();
  const [page, setPage] = useState('');

  const redirectToPage = (newPage: string) => {
    navigate(`/${newPage}`);
    setPage(newPage);
  };

  console.log(page);
  console.log('tecnologia' === page);
  
  return (
    <header className={Styles.header}>
      <div onClick={() => redirectToPage('')} className={`${Styles.headerItem} ${page === '' ? Styles.active : ''}`}>Recentes</div>
      <div onClick={() => redirectToPage('tecnologia')} className={`${Styles.headerItem} ${page === 'tecnologia' ? Styles.active : ''}`}>Tecnologia</div>
      <div onClick={() => redirectToPage('cozinha')} className={`${Styles.headerItem} ${page === 'cozinha' ? Styles.active : ''}`}>Cozinha</div>
      <div onClick={() => redirectToPage('casa')} className={`${Styles.headerItem} ${page === 'casa' ? Styles.active : ''}`}>Casa</div>
    </header>
  );
}

export default Header;