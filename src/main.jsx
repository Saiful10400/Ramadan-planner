
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './RouterProvider.jsx'
import ContextApi from './components/context api/ContextApi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextApi>
    <RouterProvider router={router}></RouterProvider>
  </ContextApi>
)
