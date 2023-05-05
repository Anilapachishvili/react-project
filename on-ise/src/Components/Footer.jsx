import "./footer.css";
import Icon from "../images/icon.png";
import Follow from "../images/Follow.png";
function Footer() {
    return (
      
       
          <div >
            <div className="lists">
                <div className="contact">
                    <ul>
                     
                        <li>Contact Us</li>
                        <li>Email</li>
                        <li>needhelp@Organia.com</li>
                        <li>Phone</li>
                        <li> 666 888 888</li>
                        <li>Address</li>
                        <li> 88 road, borklyn street, USA</li>
                    </ul>
                </div>


                <div className="organic1" >
                    <img className="follow" src= {Follow}alt="app" />
               
                <div className="organic">
             
                   <h1>Organick</h1>
                   <img src={Icon} alt="icon"/>
                </div>
             
                </div>


                <div className="guide">
                    <ul>
                 
                     
                     <li>Utility Pages</li>
                     <li>Style Guide</li>
                     <li>404 Not Found</li>
                     <li>Password Protected</li>
                     <li> Licences</li>
                     <li>Changelog</li>
                 
                
                    </ul>
                </div>
            </div>
          </div>
  
  
    );
  }
  
  export default Footer; 
