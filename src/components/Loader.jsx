import React, { useEffect, useState } from 'react'
import './Loader.css';

const Loader = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader-wrapper ${hide ? 'loader-hide' : ''}`}>
      <div className="loader-content">
        <h1 className="loader-title">Marée</h1>
        <span className="edgtf-logo-svg-path">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 26.1" className="edgtf-butterfly">
            <path d="M9.4 10.8C9.7 5.3 5.4 0.5 5.4 0.5s-4.7 4.3-5 9.9c-0.3 5.6 4 10.3 4 10.3S9.1 16.4 9.4 10.8z"/>
            <path d="M24.6 21.7c0 0-4.3-4.7-9.9-5 -5.6-0.3-10.3 4-10.3 4s4.3 4.7 9.9 5C19.8 26 24.6 21.7 24.6 21.7z"/>
          </svg>
        </span>
      </div>
    </div>
  )
}

export default Loader
