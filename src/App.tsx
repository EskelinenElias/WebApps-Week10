import { Suspense } from 'react';
import './App.css'
import MyContainer from './components/MyContainer'; 
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import { useTranslation } from 'react-i18next';

function Router() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          // Home page
          <Route path="/" element={
            <>
              <h1>{t('frontPage')}</h1>
              <MyContainer/>
            </>
          }/>
          // About page
          <Route path="/about" element={
            <> 
              <About/>
            </>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function App() {
  return (
    <Suspense fallback="loading">
      <Router/>
    </Suspense>
  );

}

export default App; 
