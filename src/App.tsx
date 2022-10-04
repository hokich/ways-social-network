import "./styles/globals.scss"

import React from "react"
import {Routes, Route} from "react-router-dom"

import Layout from "./components/common/Layout"
import Home from "./pages/Home"
import Friends from "./pages/Friends"
import Messages from "./pages/Messages"
import Profile from "./pages/Profile"
import Peoples from "./pages/Peoples"

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={""} element={<Home/>}/>
        <Route path={"/messages"} element={<Messages/>}/>
        <Route path={"/profile"} element={<Profile/>}/>
        <Route path={"/friends"} element={<Friends/>}/>
        <Route path={"/peoples"} element={<Peoples/>}/>
      </Routes>
    </Layout>
  );
}

export default App