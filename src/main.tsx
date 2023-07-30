import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { HashRouter } from 'react-router-dom'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme } from './themes/light-theme.ts'
import { AuthProvider, CategoriesProvider } from './context/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <CategoriesProvider>
          <ThemeProvider theme={ lightTheme }>
            <CssBaseline/>
            <App />
          </ThemeProvider>
        </CategoriesProvider>
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>,
)
