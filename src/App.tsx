import './App.css'
import MyContainer from './components/MyContainer'; 
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          // Home page
          <Route path="/" element={
            <>
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

export default App
