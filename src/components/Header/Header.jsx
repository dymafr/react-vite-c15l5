import { useState } from 'react';
import styles from './Header.module.scss';
import HeaderMenu from './components/HeaderMenu';
import cookchef from "../../assets/images/cookchef.png";

function Header({ setPage }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <img
          onClick={() => setPage('homepage')}
          src={cookchef}
          alt="logo cookchef"
        />
      </div>
      <ul className={styles.headerList}>
        <button
          onClick={() => setPage('admin')}
          className="btn btn-primary mr-15"
        >
          Ajouter une recette
        </button>
        <button className="mr-15 btn btn-reverse-primary">
          <i className="fa-solid fa-heart mr-5"></i>
          <span>Wishlist</span>
        </button>
        <button className="btn btn-primary">Connexion</button>
      </ul>
      <i
        onClick={() => setShowMenu(true)}
        className={`fa-solid fa-bars ${styles.headerXs}`}
      ></i>
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMenu />
        </>
      )}
    </header>
  );
}

export default Header;