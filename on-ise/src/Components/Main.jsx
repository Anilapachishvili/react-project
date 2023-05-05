import "./main.css";

import Carrot from "../images/carrot.png";
import Leaf from "../images/leaf.png";
import Lemons from "../images/lemons.png";
import Tomato from "../images/tomato.png";
import Raspeberry from "../images/raspeberry.png";
import Orange from "../images/orange.png";



function Main() {
    return (
      
        <div className="flex" >
            <div className="box">
            <div>
          <img className="leaf"  src={Leaf} alt="leaf"/>
          <h1>Organic Betel Leaf</h1>
          <p>Leaf</p>
          </div>
          
          <div>
          <img className="carrot"  src={Carrot} alt="carrot"/>
          <h1>Organic Carrot</h1>
          <p>Farmer</p>
          </div>

          <div className="style">
          <img  src={Lemons} alt="lemon"/>    
              <h1 >Green & TastyLemon</h1>
              <p>Fruits</p>     
          </div>
          </div>
          <div className="boxes">
          <div className="style">
          <img  src={Tomato} alt="lemon"/>    
              <h1>Natural Tommato</h1>
              <p>Fruits</p>     
          </div>
          <div className="style">
          <img  src={Raspeberry} alt="lemon"/>    
              <h1 >Black Raspberry</h1>
              <p>Farmer</p>     
          </div>
          <div className="style">
          <img src={Orange} alt="lemon"/>    
              <h1>Honey Orange</h1>
              <p>Farmer</p>     
          </div>

          </div>
          </div>
       
        
    );
  }
  
  export default Main; 