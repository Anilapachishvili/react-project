import Image from "../images/Image.png";
import "./header.css";
function Header() {
  return (
    
       <header>
        <h1 className="main"> Portfolio Standard</h1>
      <img className="mainlogo"  src={Image} alt="mainlogo"/>
      </header>
     

  );
}

export default Header; 
