import "./styles/globals.scss"

import React, { useEffect } from "react"
import { Routes, Route } from "react-router-dom"

import {initializeApp, selectAppInitialized} from "./redux/slices/appSlice"
import Layout from "./components/common/Layout"
import Home from "./pages/Home"
import Friends from "./pages/Friends"
import Messages from "./pages/Messages"
import Profile from "./pages/Profile"
import Peoples from "./pages/Peoples"
import Login from "./pages/Login"
import Preloader from "./components/icons/Preloader"
import {useAppDispatch, useAppSelector} from "./redux/hooks"

const App = () => {
  const dispatch = useAppDispatch()

  const initialized = useAppSelector(selectAppInitialized)

  useEffect(() => {
    dispatch(initializeApp())
  }, [])

  if (!initialized) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Preloader width={200} height={200} />
      </div>
    )
  }

  return (
    <Layout>
      <Routes>
        <Route path={""} element={<Home />} />
        <Route path={"/messages"} element={<Messages />} />
        <Route path={"/profile/:userId"} element={<Profile />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/friends"} element={<Friends />} />
        <Route path={"/peoples"} element={<Peoples />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </Layout>
  )
}

export default App
