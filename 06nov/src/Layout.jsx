import { Link ,Outlet } from "react-router-dom";
const Layout=()=>{

    return(
        <>
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>

        <hr size="6" color="red"/>


            <Outlet/>


            
        <hr size="6" color="blue"/>
      
        www.company.com
        
        </>
    )
}
export default Layout;