import React, { useState } from 'react';
import './assets/styles/style.css'
import { Home } from './pages/Home';
import { Story } from './pages/Story'
import { Gallery } from './pages/Gallery'
import { Contact } from './pages/Contact'
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  let redirect;
  const route = window.location.pathname.split('/')[1];
  if (route === '') {
    redirect = 'home';
  } else {
    redirect = route;
  }
  const [page, setPage] = useState(redirect);
  const [shrink, setShrink] = useState(false);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.history.pushState('', '', `/${newPage}`);
  };

  window.addEventListener('popstate', () => {
    const route = window.location.pathname.split('/')[1];
    if (route === '') {
      setPage('home');
    } else {
      setPage(route);
    }
  })

  window.onscroll = () => {
    if (window.scrollY >= 100) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  }

  return (
    <>
      <Header page={page} shrink={`${shrink}`} setPage={handlePageChange} />
      {page === 'home' && <Home />}
      {page === 'gallery' && <Gallery />}
      {page === 'story' && <Story />}
      {page === 'contact' && <Contact />}
      <Footer page={page} setPage={handlePageChange} />
    </>
  );
}

export default App;