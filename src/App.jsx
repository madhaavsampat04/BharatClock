import './App.css'
import ClockHeading from './Components/ClockHeading';
import CurrentTime from './Components/CurrentTime';
import ClockSlogan from './Components/ClockSlogan';
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
   <center> 
    <ClockHeading/>
    <ClockSlogan/>
    <CurrentTime/>
    
   </center>
  )
}

export default App;
