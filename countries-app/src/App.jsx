import React from 'react'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'

import Homepage from './pages/Homepage'
import CardDetails from './pages/CardDetails'
import MainLayout from './layouts/MainLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<MainLayout/>}>
    <Route index element = {<Homepage/>}/>
    <Route path='card/:name' element = {<CardDetails/>}/>
    </Route>
  )
)


const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App