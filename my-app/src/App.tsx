import { RouterProvider } from 'react-router-dom'
import AppRoutes from './routes/AppRoute'

function App() {

  return (
    <RouterProvider router={AppRoutes} />
  )
}

export default App
