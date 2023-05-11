import "./App.css";
import Lists from './Components/Notification';
import greenImage from "./images/green.png"


function App() {
  return (
    <div className="App">

     <div className='flex'>
      <div className='Success'>

       <Lists
             imageSrc={greenImage}
        title= "Success" 
        text="Order Placed Successfully. You can check order delivery status."
          />
       </div>
       
      <div className='Error'> 
      <Lists title ="Error" text="Order Placed Successfully. You can check order delivery status."/>
      </div>

      <div className='Warning'>
       <Lists title ="Warning" text="Order Placed Successfully. You can check order delivery status."/>
       </div>
       <div className='Info'>
       <Lists title ="Info" text="Order Placed Successfully. You can check order delivery status."/>
       </div>
       </div>
    </div>
  )
}

export default App;