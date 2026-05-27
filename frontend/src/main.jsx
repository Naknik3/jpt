import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './index.css'
import { Layout } from './Components/Layout/Layout/Layout'

// Entry point — mounts the React app into the #root div in index.html
// StrictMode highlights potential issues during development
// Provider makes the Redux store available to every component in the tree
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider>
  </StrictMode>,
)
