import { useState } from "react";
function MyComponents() {
    const [name, setName] = useState("John");
    const [age, setAge] = useState(30);
    const [isEmployed, setIsEmployed] = useState(false);

    const incrementAge = () => setAge(age + 1);
    const toggleEmployment= () => setIsEmployed(!isEmployed);


    return (
        <div>
            <h1>My Components</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={() => setName("Jane")}>Change Name</button>
            <button onClick={incrementAge}>Increment Age</button>
            <button onClick={toggleEmployment}>Toggle Employment</button>
        </div>
    );
}
export default MyComponents;