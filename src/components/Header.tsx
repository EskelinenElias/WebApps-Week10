import "../styles/header.css";
import { Link } from "react-router-dom"; 
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();

  // Function to change the language
  function changeLanguage(language) {
    i18n.changeLanguage(language);
  };
  
  return (
    <header>
      <h1>Advanced Web App</h1>
      <nav>
        <Link to="/">{t('home')}</Link>
        <Link to="/about">{t('about')}</Link>
        <button id="fi" onClick={() => changeLanguage('fi')}>FI</button>
        <button id="en" onClick={() => changeLanguage('en')}>EN</button>
      </nav>
    </header>
  );
};

export default Header;