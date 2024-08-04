import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Layout from './pages/Layout'
import PrivateRoutes from './routes/PrivateRoutes'
import HomePage from './pages/movie/HomePage'
import MovieDetailPage from './pages/movie/MovieDetailPage'
import Login from './pages/user/Login'
import Register from './pages/user/Register'
import DashboardAdmin from './pages/user/DashboardAdmin'
import PageNotFound from './components/PageNotFound/PageNotFound'
// import { useEffect } from 'react'
// import { ACCESS_TOKEN } from './constants'
// import { jwtDecode } from "jwt-decode";

function App() {
  // useEffect(() => {
  //   const accessToken = localStorage.getItem(ACCESS_TOKEN)
  //   if (accessToken) {
  //     const { exp } = jwtDecode(accessToken);
  //     console.log("exp", exp)
  //   }
  // }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<PrivateRoutes element={<HomePage />} />} />
          <Route path='/movies/:id' element={<PrivateRoutes element={<MovieDetailPage />} />} />
          <Route path='/admin' element={<PrivateRoutes element={<DashboardAdmin />} />} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
