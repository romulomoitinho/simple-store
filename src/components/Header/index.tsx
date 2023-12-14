import Styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const redirectToPage = (page: string) => {
    navigate(`/${page}`);
  };

  return (
    <header className={Styles.header}>
      <div onClick={() => redirectToPage('')} className={Styles.headerItem}>Recentes</div>
      <div onClick={() => redirectToPage('tecnologia')} className={Styles.headerItem}>Tecnologia</div>
      <div onClick={() => redirectToPage('cozinha')} className={Styles.headerItem}>Cozinha</div>
      <div onClick={() => redirectToPage('casa')} className={Styles.headerItem}>Casa</div>
    </header>
  );
}

export default Header;