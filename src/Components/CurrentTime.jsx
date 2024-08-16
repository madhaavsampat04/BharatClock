let CurrentTime = () => {
  let time=new Date();
  return(
   <div className="timing">Today's Date is-  {time.toLocaleDateString()} <br></br> Current time  is- {time.toLocaleTimeString()}
   <div>
    <br></br>
   <img src="../bharatclock.jpg" height="500px"></img>
   </div>
   </div>

  )
   }
 
   export default CurrentTime;

