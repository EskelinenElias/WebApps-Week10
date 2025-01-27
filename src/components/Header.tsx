import "../styles/header.css";
import { Link } from "react-router-dom"; 
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();
  
  return (
    <header>
      <h1>Advanced Web App</h1>
      <nav>
        <Link to="/">{t('home')}</Link>
        <Link to="/about">{t('about')}</Link>
        <button id="fi" onClick={() => i18n.changeLanguage('fi')}>FI</button>
        <button id="en" onClick={() => i18n.changeLanguage('en')}>EN</button>
      </nav>
    </header>
  );
};

export default Header;