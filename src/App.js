import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb'
  },
  {
    code: 'ru',
    name: 'Русский',
    country_code: 'ru'
  },
  {
    code: 'uz',
    name: 'Uzbek',
    country_code: 'uz'
  },
]
function App() {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const release = new Date('2021-08-16');
  const timeDifferense = new Date () - release
  const number_of_days = Math.floor(timeDifferense/(1000* 60 * 60 * 24))
  const {t} = useTranslation()
  useEffect ( () =>{
    document.title = t('title')
  }, [t])
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="d-flex justify-content-end">
                  <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>
              {t('language')}
              </DropdownToggle>
              <DropdownMenu>
                {languages.map(({code, name, country_code}) =>{
                  return <DropdownItem key={country_code}>
                    <button type="button" className="btn btn-link" onClick={() =>{
                      i18next.changeLanguage(code)
                    }}
                    >
                    <span className={`flag-icon flag-icon-${country_code} mr-2`}></span>
                      {name}
                    </button>
                      </DropdownItem>
                    })}
                  </DropdownMenu>
                </Dropdown>
          </div>
        </div>
      </div>
      <div className="row">
      <div className="col-lg-12">
        <h2>{t('welcome_message')}</h2>
        <p>{t('days_since_release', {number_of_days})}</p>
      </div>
      </div>
    </div>
  );
}

export default App;
