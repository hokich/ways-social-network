import "./styles/globals.scss"

import React from "react"
import {Routes, Route} from "react-router-dom"

import Layout from "./components/common/Layout"
import Home from "./pages/Home";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='' element={<Home/>}/>
      </Routes>
    </Layout>
  );
}

export default App