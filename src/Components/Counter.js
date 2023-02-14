import { useState, useEffect } from 'react';


const Counter = () => {
  const [cntr , setcntr] = useState(0);
  useEffect(() => { setcntr(100);},[]);


  return (
    <div>
      <button className='btn btn-danger' onClick={() => setcntr((prevConter) => prevConter - 1)}> - </button>
      <h3>{cntr}</h3>
      <button className='btn btn-primary' onClick={() => setcntr((prevConter) => prevConter + 1)}> + </button>
    
    
    </div>

    
  )
}

export default Counter

