import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();


  const changeLanguage = (l) =>{
      i18n.changeLanguage(l)
  }
  return (
    <>
          <h1>{t('hello')}</h1>

          <div>
            {t('chooseLanguage')} : 
            <button onClick={() => changeLanguage('fr-FR')}>fr</button>
            <button onClick={() => changeLanguage('en')}>en</button>
          </div>
    </>
  )
}

export default App
