import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { HashRouter } from 'react-router-dom'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme } from './themes/light-theme.ts'
import { AuthProvider } from './context/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <ThemeProvider theme={ lightTheme }>
          <CssBaseline/>
          <App />
        </ThemeProvider>
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>,
)
