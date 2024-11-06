import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import About from "./About"
import Home from "./Home"
import Contact from"./contact"

const App=()=>{



    return(
     
     <>
     
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>

      </Route>

     </Routes>
     
     
     </BrowserRouter>
         </>
       )
      }
      export default App;