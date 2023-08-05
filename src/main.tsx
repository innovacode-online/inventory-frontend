import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { HashRouter } from 'react-router-dom'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme } from './themes/light-theme.ts'
import { AuthProvider, CategoriesProvider, ToastProvider, ProductsProvider } from './context/index.ts'
import { SaleProvider } from './context/sales/SaleProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <ToastProvider>
        <AuthProvider>
          <CategoriesProvider>
            <ProductsProvider>
              <SaleProvider>
                <ThemeProvider theme={ lightTheme }>
                  <CssBaseline/>
                  <App />
                </ThemeProvider>
              </SaleProvider>
            </ProductsProvider>
          </CategoriesProvider>
        </AuthProvider>
      </ToastProvider>
    </HashRouter>
  </React.StrictMode>,
)
