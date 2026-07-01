import { useState, useEffect} from "react";
import Axios from "axios";
function Api(){
    const [catFact, setCatFact] = useState("");
    const fetchCatFact = () => {
        Axios.get('https://catfact.ninja/fact')
        .then((res) => {
            setCatFact(res.data.fact);
        });
    }
    useEffect(() => {
        Axios.get('https://catfact.ninja/fact')
        .then((res) => {
            setCatFact(res.data.fact);
        });
    }, []);
    return (
        <div className="app">
            <button onClick={fetchCatFact}>Generate Cat Fact</button>
            <p>{catFact}</p>
        </div>
    );
}
export default Api;