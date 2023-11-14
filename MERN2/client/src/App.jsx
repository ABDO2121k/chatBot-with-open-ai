import { useContext } from "react"
import Chat from "./Pages/Chat"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import NotFound from "./Pages/NotFound"
import Signup from "./Pages/Signup"
import Header from "./components/Header"
import {Route, Routes} from 'react-router-dom'
import { authContext } from "./context/AuthContext"


function App() {
 
const auth =useContext(authContext)
  return (
     <main>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
       {auth?.currentUser&&auth.isLo&& <Route path="/chat" element={<Chat/>}/>}
        <Route path="*" element={<NotFound/>}/>
      </Routes>
     </main>
  )
}

export default App
