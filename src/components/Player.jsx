import { useRef, useState } from "react";


export default function Player() {
  // This is used because we don't want to change the state the moment the user types the name
  const playerName = useRef();
  const [enteredPlayer ,  setEnteredPlayer] = useState('');
  // This is the UseState method to change 
  // const [submitted ,  setSubmitted] = useState(false);

  // function handleChange(event){
  //   setEnteredPlayer(event.target.value);
  // }

  // function handleClick(){
  //   setSubmitted(true);
  // }

  function handleClick(){
    setEnteredPlayer(playerName.current.value);
  }

  return (
    // <section id="player">
    //   <h2>Welcome {submitted ? enteredPlayer : "unknown entity"}</h2>
    //   <p>
    //     <input type="text" onChange={handleChange}/>
    //     <button onClick={handleClick}>Set Name</button>
    //   </p>
    // </section>

    //This is the UseRef method 
     <section id="player">
      <h2>Welcome {enteredPlayer ?? "Unknown Entity"}</h2>
      <p>
        <input
         type="text" 
         ref={playerName} 
         />
        <button 
        onClick={handleClick}
        >Set Name</button>
      </p>
    </section>
   
  );
}
