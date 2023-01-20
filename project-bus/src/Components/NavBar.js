import "./NavBar.css";
import Gif from "../assets/bus.gif"




const NavBar = () => {
    
   
  
  return (
    <div className="Nav">
        
        <h1>Project  Bus</h1> 
        <div className="Bus">
        <img className="walkin" src={Gif} alt="bus" />
           
          </div>
    
    </div>
   
  )
}

export default NavBar