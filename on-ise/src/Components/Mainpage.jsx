import "./Mainpage.css";
import BlueLogo from "../images/blue logo.jpg";



function MainPage() {
    return (
      
  
        <div className="orangelogo">
        <img src={BlueLogo} alt="orangelogo" />


              <div className="fl">
                <form>
     <input type="email" id="email" name="email" placeholder="Enter your email address" required/>
    <button type="submit">Subscribe</button>
    </form>
    </div>

    </div> 
       
        
    );
  };
  export default   MainPage;
 