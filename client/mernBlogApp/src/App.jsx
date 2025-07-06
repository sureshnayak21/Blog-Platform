import { useState } from 'react'
import Hedder from './Header'
import Post from "./Post.jsx"
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout.jsx';
import IndexPage from './pages/IndexPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx';
import { UserContextProvider } from './UserContext.jsx';
import CreatePost from './pages/CreatePost.jsx';


function App() {


  return (
    <>
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ <IndexPage/>} />
          <Route path='/login' element={<LoginPage/>} />
           <Route path='/Register' element={<RegisterPage/>} />
            <Route path="/create" element ={<CreatePost/>}/>

        </Route>
      </Routes>
    </UserContextProvider>

    </>
  );
}

export default App
