import { useState } from 'react'
import {Footer, Blog, Possibility,Features, WhatGPT3, Header} from './containers';
import { Article, Brand, CTA, Feature, NavBar } from './Components'
import AuthModal from './containers/authModal/AuthModal';
import { useAuth } from './context/AuthContext';

import './App.css';
import Toast from './containers/header/toast/Toast';



function App() {

  const {authType, setAuthType} = useAuth();

  return (
    <>
     <Toast />
      <div className="App">
        <div className="gradient__bg">
          <NavBar />
          <Header />

          {authType && (
            <AuthModal type={authType} onClose={() => setAuthType(null)} />
          )}
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App
