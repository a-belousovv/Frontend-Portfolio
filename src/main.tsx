import ReactDOM from 'react-dom/client'
import './assets/styles/main-styles/main'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage.tsx'
const router = createBrowserRouter([{ path: '/', element: <MainPage /> }])
ReactDOM.createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
)
