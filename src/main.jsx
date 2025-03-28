import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'
import AuthProvider from './components/authProvider/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
        <Toaster></Toaster>
      </HelmetProvider>

    </AuthProvider>
  </React.StrictMode>,
)
