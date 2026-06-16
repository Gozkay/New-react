// import {useState} from 'react';
// function MyCars() {
//     const [cars, setCars] = useState({year:2024, make:"Toyota", model:"Camry"});
//     function updateCar() {
//         setCars({year:2025, make:"Honda", model:"Civic"})
//     }   
//     return (
//         <div>
//             <p>your favorite car is {cars.year} {cars.make} {cars.model}</p>
//             <input type=number{cars.year}</p>
//             <p>Make: {cars.make}</p>
//             <p>Model: {cars.model}</p>
//             <button onClick={updateCar}>Update Car</button>
//         </div>
//     );
// }export default MyCars;
import { useState } from "react";
function MyCar() {
    const [cars, setCar] = useState([])
    const [year, setYear] = useState(new Date().getFullYear())
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    function handleAddCar() {        if (make === "" || model === "")
            return;
        setCar(c=>[...c, { year, make, model }])
        setYear(new Date().getFullYear())
        setMake("")
        setModel("")
    }
    function handleRemoveCar(index) {
        setCar(c=>c.filter((_, i) => i !== index))
    }
    function handleYearChange(event) {
        setYear(event.target.value)
    }
    function handleMakeChange(event) {
        setMake(event.target.value)
    }
    function handleModelChange(event) {
        setModel(event.target.value)
    }
    return (
        <div>
            <h2>My Cars</h2>
            <ul>
                {cars.map((car, index) => (
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>
                ))}
            </ul>
            <input type="number" value={year} onChange={handleYearChange} />
            <input type="text" value={make} onChange={handleMakeChange} placeholder="Make" /><br />
            <input type="text" value={model} onChange={handleModelChange} placeholder="Model" /><br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    ); 
}export default MyCar;