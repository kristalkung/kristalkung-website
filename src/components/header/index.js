import React from 'react'
import './header.css'
import Mobile from './mobile'
import Web from './web'

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className='header'>
      <div className='logo'> Kristal Kung </div>
      <div className='menu'>
        <div className='web-menu'> <Web /> </div>
        <div className='mobile-menu'> 
          <div onClick={() => setIsOpen(!isOpen)}>
            <img className='menu-icon' src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIC05NiA1MTIgNTEyIiB3aWR0aD0iNTEycHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzgyYjFmZiI+PHBhdGggZD0ibTMyIDBoNDQ4YzE3LjY3MTg3NSAwIDMyIDE0LjMyODEyNSAzMiAzMnMtMTQuMzI4MTI1IDMyLTMyIDMyaC00NDhjLTE3LjY3MTg3NSAwLTMyLTE0LjMyODEyNS0zMi0zMnMxNC4zMjgxMjUtMzIgMzItMzJ6bTAgMCIvPjxwYXRoIGQ9Im0zMiAxMjhoNDQ4YzE3LjY3MTg3NSAwIDMyIDE0LjMyODEyNSAzMiAzMnMtMTQuMzI4MTI1IDMyLTMyIDMyaC00NDhjLTE3LjY3MTg3NSAwLTMyLTE0LjMyODEyNS0zMi0zMnMxNC4zMjgxMjUtMzIgMzItMzJ6bTAgMCIvPjxwYXRoIGQ9Im0zMiAyNTZoNDQ4YzE3LjY3MTg3NSAwIDMyIDE0LjMyODEyNSAzMiAzMnMtMTQuMzI4MTI1IDMyLTMyIDMyaC00NDhjLTE3LjY3MTg3NSAwLTMyLTE0LjMyODEyNS0zMi0zMnMxNC4zMjgxMjUtMzIgMzItMzJ6bTAgMCIvPjwvZz48L3N2Zz4=" alt='' /> 
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        
        </div>
        </div>
    </div>
  )
}

export default Header
