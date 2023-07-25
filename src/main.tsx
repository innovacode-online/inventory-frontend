import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { HashRouter } from 'react-router-dom'

import { ThemeProvider } from '@mui/material'
import { lightTheme } from './themes/light-theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider theme={ lightTheme }>
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
)
