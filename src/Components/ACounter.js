import { useState, useEffect } from 'react';


const ACounter = () => {
  const [cntr , setcntr] = useState(0);
  useEffect(() => { setcntr(100);},[]);

  return (
    <div>
      <button onClick={
        () => setcntr((prevConter) => prevConter - 1)
      }> - </button>
      <h3>{cntr}</h3>
      <button onClick={
        () => setcntr((prevConter) => prevConter + 1)
      }> + </button>
    </div>
  );
}

export default ACounter;