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
            <img className='menu-icon' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDA5LjYgNDA5LjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwOS42IDQwOS42OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTM4Mi4zMjEsODEuOTJIMjcuMjc5QzEyLjI0LDgxLjkyLDAsOTQuMTcsMCwxMDkuMjI3czEyLjI0LDI3LjMwNywyNy4yNzksMjcuMzA3aDM1NS4wNDENCgkJCWMxNS4wMzksMCwyNy4yNzktMTIuMjUsMjcuMjc5LTI3LjMwN1MzOTcuMzYsODEuOTIsMzgyLjMyMSw4MS45MnogTTM4Mi4zMjEsMTIyLjg4SDI3LjI3OWMtNy41MTMsMC0xMy42MjYtNi4xMjQtMTMuNjI2LTEzLjY1Mw0KCQkJYzAtNy41Myw2LjExMy0xMy42NTMsMTMuNjI2LTEzLjY1M2gzNTUuMDQxYzcuNTEzLDAsMTMuNjI2LDYuMTI0LDEzLjYyNiwxMy42NTNDMzk1Ljk0NywxMTYuNzU2LDM4OS44MzMsMTIyLjg4LDM4Mi4zMjEsMTIyLjg4eiINCgkJCS8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zODIuMzIxLDE3Ny40OTNIMjcuMjc5QzEyLjI0LDE3Ny40OTMsMCwxODkuNzQ0LDAsMjA0LjhzMTIuMjQsMjcuMzA3LDI3LjI3OSwyNy4zMDdoMzU1LjA0MQ0KCQkJYzE1LjAzOSwwLDI3LjI3OS0xMi4yNSwyNy4yNzktMjcuMzA3UzM5Ny4zNiwxNzcuNDkzLDM4Mi4zMjEsMTc3LjQ5M3ogTTM4Mi4zMjEsMjE4LjQ1M0gyNy4yNzkNCgkJCWMtNy41MTMsMC0xMy42MjYtNi4xMjMtMTMuNjI2LTEzLjY1M2MwLTcuNTMsNi4xMTMtMTMuNjUzLDEzLjYyNi0xMy42NTNoMzU1LjA0MWM3LjUxMywwLDEzLjYyNiw2LjEyNCwxMy42MjYsMTMuNjUzDQoJCQlDMzk1Ljk0NywyMTIuMzMsMzg5LjgzMywyMTguNDUzLDM4Mi4zMjEsMjE4LjQ1M3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTM4Mi4zMjEsMjczLjA2N0gyNy4yNzlDMTIuMjQsMjczLjA2NywwLDI4NS4zMTcsMCwzMDAuMzczYzAsMTUuMDU2LDEyLjI0LDI3LjMwNywyNy4yNzksMjcuMzA3aDM1NS4wNDENCgkJCWMxNS4wMzksMCwyNy4yNzktMTIuMjUsMjcuMjc5LTI3LjMwN0M0MDkuNiwyODUuMzE3LDM5Ny4zNiwyNzMuMDY3LDM4Mi4zMjEsMjczLjA2N3ogTTM4Mi4zMjEsMzE0LjAyN0gyNy4yNzkNCgkJCWMtNy41MTMsMC0xMy42MjYtNi4xMjQtMTMuNjI2LTEzLjY1M2MwLTcuNTMsNi4xMTMtMTMuNjUzLDEzLjYyNi0xMy42NTNoMzU1LjA0MWM3LjUxMywwLDEzLjYyNiw2LjEyNCwxMy42MjYsMTMuNjUzDQoJCQlDMzk1Ljk0NywzMDcuOTAzLDM4OS44MzMsMzE0LjAyNywzODIuMzIxLDMxNC4wMjd6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" alt='' /> 
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        
        </div>
        </div>
    </div>
  )
}

export default Header
