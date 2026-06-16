
// function Food() {
//     const food1 = "Pizza"
//     const food2 = "Burger"
//     return (
//         <ul>
//             <li>{food1}</li>
//             <li>{food2.toUpperCase()}</li>
//         </ul>
//     );
// }
// export default Food
import { useState } from "react";
function Food() {
    const [foods,setFood] = useState(["apple","orange","banana"]);
    function HandleAddFood() {
        const newfood = document.getElementById("foodinput").value
        if (newfood === "")
            return;
        setFood([...foods, newfood])
            
    }
    function HandleRemoveFood(index) {
        setFood(foods.filter((_, i) => i !== index))
     }

    return( <div>
        <h2>List of Food</h2>
        <ul>
            {foods.map((food,index) => <li key={index}  onClick={() => HandleRemoveFood(index)} >{food}</li>)}
            
        </ul>
        <input type="text" name="" id="foodinput" placeholder="Enter food Name" />
        <button onClick={HandleAddFood}>Add food</button> 
    </div>)
}
export default Food