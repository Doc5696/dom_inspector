import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './pages/App'
import Fallback from './pages/Fallback'

const mountPoint = document.getElementById(
  'inspector_widget_iframe',
) as HTMLElement

const fallbackMountPoint = document.getElementById('root') as HTMLElement

const root = ReactDOM.createRoot(mountPoint || fallbackMountPoint)

root.render(
  <React.StrictMode>{mountPoint ? <App /> : <Fallback />}</React.StrictMode>,
)
