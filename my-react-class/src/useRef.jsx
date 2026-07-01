import  {useState,useEffect,useRef} from "react";

function UseRef() {

    const ref = useRef(0);

    useEffect(() => {
        console.log("COMPONENT RE-RENDERED");
        
    })

    function handleClick() {
    ref.current++;
    console.log(ref.current);
    
    }

    return(
            <button onClick={handleClick}>Click Me</button>
    )
}

export default UseRef;